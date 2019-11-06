import React, { Component } from "react";
import axios from "axios";
import CountryDetails from "../CountryDetails";
import { Link } from "react-router-dom";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedCountries: [],
      country: {},
    };
  }

  componentDidMount() {
    console.log("componentDidMount()");
    this.props.selectedCountriesProp.map((country, index) => {
      return axios
        .get(`https://restcountries.eu/rest/v2/name/${country}`)

        .then(result => {
          console.log(result.data[0].name);
          console.log(result.data[0].capital);
          this.printCountries(result.data[0]);
        })

        .catch(console.error());
    });
  }

  showDetails = country => {
    console.log("showDetails()");
    console.log(country);
    this.setState({
      country: country,
    });
    console.log(this.state.country);
  };

  printCountries = country => {
    console.log("printCountries()");
    console.log(country);
    this.setState({
      displayedCountries: [
        ...this.state.displayedCountries,
        <section className="row" onClick={() => this.showDetails(country)}>
          <div className="col">
            <h1 className="text-center">{country.name}</h1>
          </div>
        </section>
      ],
    });
  };

  render() {
    return (
      <>
        <aside className="col-3">{this.state.displayedCountries}</aside>
        <article className="col-9 bg-light">
          <CountryDetails
            countryProp={this.state.country}
          />
          <Link to="/">
            <button className="btn btn-warning my-5">&#8592; Back</button>
          </Link>
        </article>
      </>
    );
  }
}

export default Details;
