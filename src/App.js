import React, { Component } from "react";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Error from "./pages/Error";
import countries from "./db/Countries";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountries: []
    };
  }
  addCountry = () => {
    console.log("addCountry()");
    const countryInput = document.querySelector("#countryInput");

    let selectedCountries = [];
    selectedCountries =
      this.state.selectedCountries.includes(countryInput.value) ||
      !countryInput.value ||
      countries.indexOf(countryInput.value) === -1
        ? [...this.state.selectedCountries]
        : [...this.state.selectedCountries, countryInput.value];

    this.setState({
      selectedCountries
    });

    countryInput.value = "";
  };
  removeCountry = country => {
    console.log("removeCountry()");
    const selectedCountries = this.state.selectedCountries;
    selectedCountries.splice(selectedCountries.indexOf(country), 1);

    this.setState({
      selectedCountries: this.state.selectedCountries
    });
  };
  removeAllCountries = () => {
    console.log("removeAllCountries()");
    this.setState({
      selectedCountries: []
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <main className="row justify-content-center">
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Home
                    countriesProp={countries}
                    addCountryProp={this.addCountry}
                    removeCountryProp={this.removeCountry}
                    removeAllCountriesProp={this.removeAllCountries}
                    selectedCountriesProp={this.state.selectedCountries}
                  />
                )}
              />
              <Route
                exact
                path="/details"
                render={() => (
                  <Details
                    selectedCountriesProp={this.state.selectedCountries}
                  />
                )}
              />
              <Route render={() => <Error />} />
            </Switch>
          </Router>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
