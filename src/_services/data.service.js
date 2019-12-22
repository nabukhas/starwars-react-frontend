import config from 'config';


export const dataService = {
    getFilmData,
    getPeopleData,
    getPlanetData,
    getSpeciesData
};

function getFilmData() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/Films`, requestOptions);
       
}

function getPeopleData() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/People`, requestOptions);

}

function getPlanetData() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/Planets`, requestOptions);

}

function getSpeciesData() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/Species`, requestOptions);

}
