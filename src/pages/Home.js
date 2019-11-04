import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {

  render() {
    console.log(this.props.selectedCountriesProp);

    const countriesNames = this.props.countriesProp.map((country, index) => (
      <option value={country} key={index} />
    ));

    const selectedCountriesButtons = this.props.selectedCountriesProp.map(
      (country, index) => {
        return (
          <button
            className="btn btn-danger btn-sm mr-2"
            onClick={() => this.props.removeCountryProp(country)}
            key={index}
          >
            {country}
          </button>
        );
      }
    );

    return (
      <>
        <header className="row bg-light">
          <div className="col">
            <h1 className="display-4 text-center">Countripedia</h1>
          </div>
        </header>
        <main className="row">
          <section className="col">
            <div className="input-group w-50">
              <datalist id="countriesOptions">{countriesNames}</datalist>
              <input
                list="countriesOptions"
                name="country"
                className="form-control"
                id="countryInput"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-info"
                  onClick={this.props.addCountryProp}
                >
                  Add
                </button>
              </div>
            </div>
            <span>Countries: {selectedCountriesButtons}</span>
            <br />
            <Link
              to="/details"
              // render={() => (
              //   <Details />
              // )}
            >
              <button className="btn btn-warning mt-2">Details</button>
            </Link>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
