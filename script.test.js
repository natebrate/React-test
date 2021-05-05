const googleSearch = require('./script');

//database
dbMock = [
    "cats.com",
    "fastcars.com",
    "catsareawesome.com",
    "cataract.com",
    "instagram.com",
    "disney.com",
    "netflix.com"
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
        expect(googleSearch("test", dbMock)).toEqual([]);
        expect(googleSearch("cats", dbMock)).toEqual(["cats.com", 'catsareawesome.com'])
    })

    it("work with undefined and null input", () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })

    it("Return no more than 3 matches", () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })
});

