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
            className="btn btn-outline-danger btn-sm mr-2"
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
        <section className="row">
          <section className="col-12 align-items-center">
            <h1 className="display-4 text-center">Countripedia</h1>
          </section>
        </section>
        <section className="row">
          <section className="col-12 align-items-center">
            <div className="input-group mx-auto my-5">
              <button
                className="btn btn-danger mr-5"
                onClick={this.props.removeAllCountriesProp}
              >
                Reset
              </button>
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
            <div className="col mx-auto">
              <span className="mt-4">
                Countries: {selectedCountriesButtons}
              </span>
              <div className="col justify-content-end">
                <Link to="/details">
                  <button className="btn btn-warning my-5 align-self-end">
                    Details &#8594;
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </section>
      </>
    );
  }
}

export default Home;
