const googleDatabase = [
    "cats.com",
    "fastcars.com",
    "flowers.com",
    "cataract.com",
    "instagram.com",
    "fastcars2.com",
    "catsareawesome.com"
];
// searchInput and db are 2 parameters
const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0,3) : matches;
}

console.log(googleSearch('cats', googleDatabase));

module.exports = googleSearch;
