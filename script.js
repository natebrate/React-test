const googleDatabase = [
    //list to be used for the search
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
    /*
    if the search is matched return the values from the database
    in an array (list)
    */
    //else return a null list
    const matches = db.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0,3) : matches;
}

console.log(googleSearch('dog', googleDatabase));

module.exports = googleSearch;
