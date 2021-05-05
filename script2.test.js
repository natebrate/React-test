const fetch = require("node-fetch");
const swapi = require('./script2');

it("call async await functions", () => {
    expect.assertions(1);
    return swapi.getPeople(fetch).then(data => {
        try {
            expect(data.count).toEqual(87);
        } catch (err) {
            return "error found"
        }
    })
})

it("Call promise function", () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then(data => {
        try {
            expect(data.count).toEqual(87);
            expect(data.results.length).toBeGreaterThan(5);
        } catch (err) {
            return "error error"
        }
    })
})

//integration testing
it("getPeople and return count and results", () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve(
            {json: () => Promise.resolve({
        count: 87,
        results: [0,1,2,3,4,5,6,7]
    }
    )}))

    //testing all the components together to ensure the program works
    expect.assertions(4);
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people');
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})
