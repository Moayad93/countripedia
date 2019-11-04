import React, { Component } from "react";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Error from "./pages/Error";
import countries from "./db/Countries";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

    this.setState({
      selectedCountries: [...this.state.selectedCountries, countryInput.value]
    });
  };
  removeCountry = country => {
    console.log("removeCountry()");
    const selectedCountries = this.state.selectedCountries;
    selectedCountries.splice(selectedCountries.indexOf(country), 1);

    this.setState({
      selectedCountries: this.state.selectedCountries
    });
  };
  render() {
    return (
      <div className="container-fluid">
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
        <footer className="row bg-light">
          <div className="col">
            <p className="text-center">
              <small>❮❯ by Moayad Alnuwaysir 2019</small>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
