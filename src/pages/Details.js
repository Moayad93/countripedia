import React, { Component } from "react";
import axios from "axios";

class Details extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    axios

      .get("https://restcountries.eu/rest/v2/all")

      .then(result => {
        const country = result.data.map(country => (
          <option value={country.name} />
        ));
        this.setState({
          country: country
        });
        console.log(country);
      })

      .catch(console.error());
  }

  render() {
    return (
      <>
        <section>Test</section>
        <p>{this.props.selectedCountriesProp}</p>
      </>
    );
  }
}

export default Details;
