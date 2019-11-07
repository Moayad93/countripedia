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
        <section className="col-12 mt-5">
          <h1 className="display-1 text-center text-white h1-header mt-5">Countripedia</h1>
        </section>
        <section className="col-sm-6 col-xs-9 mx-auto lead">
          <div className="input-group my-5">
            <button
              className="btn btn-danger"
              onClick={this.props.removeAllCountriesProp}
            >
              Reset
            </button>
            <datalist id="countriesOptions">{countriesNames}</datalist>
            <input
              list="countriesOptions"
              name="country"
              className="form-control ml-2"
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
          <div className="col p-0">
            <span className="mt-4 text-white lead">Countries: {selectedCountriesButtons}</span>
          </div>
          <div className="col p-0 text-center">
            <Link to="/details">
              <button className="btn btn-warning my-5 btn">Details &#8594;</button>
            </Link>
          </div>
        </section>
        {/* <Link to="/review">
          <button className="btn btn-warning my-5">Review</button>
        </Link> */}
      </>
    );
  }
}

export default Home;
