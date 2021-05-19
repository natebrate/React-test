const fetch = require('node-fetch');

//promise style
const getPeoplePromise = (fetch) => { //1
    //the function is to fetch an api from the domain and return the data
    //else throw an error with json cannot be returned
    //input value
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

getPeoplePromise(fetch).then(console.log);
getPeople(fetch).then(console.log);
