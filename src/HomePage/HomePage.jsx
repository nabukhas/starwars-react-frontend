import React from 'react';
import image from './wesite-logo.png';
import { dataService } from '@/_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hide: true,
            film: {},
            people: {},
            planet: [],
            species: []
        };
        this.getData = this.getData.bind(this);
    }

    getData() {
        dataService.getFilmData()
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    film: data
                });
            });
        dataService.getPeopleData()
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    people: data
                });
            });
        dataService.getPlanetData()
            .then(response => response.json())
            .then((data) => {
                debugger;
                this.setState({
                    planet: data.map((item, key) =>
                        <p>Planet: {item.planetName} - Pilot: ({item.pilotsCount}) {item.pilotName} - {item.speciesName}</p>
                    )
                });
            });
        dataService.getSpeciesData()
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    species: data.map((item, key) =>
                        <p>{item.speciesName} ({item.speciesCharacterCount})</p>
                    )
                });
            });
        this.setState({ hide: false });
    }


    render() {
        return (
            <div className="center">
                <div className="center">
                    <img src={image} className="image-size" alt="" />
                </div>
                <div className="center">
                    <button type="button" onClick={this.getData} className="btn btn-primary btn-lg btn-block btn-outline-warning margin">Show Some COOL StarWars Information</button>
                </div>
                <div className="data" className={this.state.hide ? 'data hidden-data' : 'data'}>
                    <div className="col-md-12 span-spacing">
                        <span >
                            Which of all Star Wars movies has the longest opening crawl (counted by numberof characters)?
                        </span>
                        <p>{this.state.film.title}</p>
                    </div>
                    <div className="col-md-12 span-spacing">
                        <span>
                            What character (person) appeared in most of the Star Wars films?
                        </span>
                        <p> {this.state.people.name}</p>
                    </div>
                    <div className="col-md-12 span-spacing">
                        <span >
                            What species (i.e. characters that belong to certain species) appeared in the mostnumber of Star Wars films?
                        </span>
                        {this.state.species}
                    </div>
                    <div className="col-md-12 span-spacing">
                        <span >
                            What planet in Star Wars universe provided largest number of vehicle pilots?
                        </span>
                        {this.state.planet}
                    </div>
                </div>

            </div>


        );
    }
}

export { HomePage };