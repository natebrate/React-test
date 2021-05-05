const fetch = require('node-fetch');

//promise style
const getPeoplePromise = (fetch) => {
    return fetch("https://swapi.py4e.com/api/people")
        .then(response => response.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results,
            }
        })
        .catch(error => {
            return error;
        })
}

//async await
const getPeople = async(fetch) => {
    try {
        const getRequest = await fetch("https://swapi.py4e.com/api/people");
        const data = await getRequest.json();
        return {
            count: data.count, results: data.results
        }
    } catch(err) {
        return err;
    }
}

module.exports = {
    getPeoplePromise,
    getPeople
};

// getPeoplePromise(fetch).then(console.log);
// getPeople(fetch).then(console.log);
