const googleSearch = require('./script');

//database
dbMock = [
    "A.com",
    "B.com",
    "C.com",
];

//integrate testing
describe('googleSearch', () => {
    //unit testing
    it(
        "this is a test", () => {
            expect("hello").toBe("hello");
            // googleSearch("test", dbMock)
        })

    it("Searching Google", () => {
        //possible input domain parameter implemented as test scripts
        // list is not empty: b1 = False, b2 = True
        expect(googleSearch("test", dbMock)).toEqual([]);
        //number of occurrences of element in list: b1, = 0, b2 = 1
        expect(googleSearch("A.com", dbMock)).toEqual(['A.com'])
    })

    it("work with undefined and null input", () => {
        //lists is empty: b1 = True, b2 = False
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        // list is null: b1 = True, b2 = False
        expect(googleSearch(null, dbMock)).toEqual([]);
    })

    it("Return no more than 3 matches", () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })
});

