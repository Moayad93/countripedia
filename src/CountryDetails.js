import React from "react";

const CountryDetails = props => {
  console.log("CountryDetails Component");

  let countryDetails = !props.countryProp ? null : (
    <section className="row">
      <div className="col-6">
        <img src={props.countryProp.flag} alt="" className="" height="125px" />
        <h1 className="lead">{props.countryProp.name}</h1>
      </div>
      <div className="col-6">{props.countryProp.capital}</div>
      <div className="col-12">
        <p>{props.countryProp.capital}</p>
        <p>{props.countryProp.altSpellings}</p>
        <p>{props.countryProp.region}</p>
        <p>{props.countryProp.population}</p>
        {/* <p>{props.countryProp.languages}</p> */}
      </div>
    </section>
  );

  console.log(props.countryProp.capital);
  console.log(props.countryProp.altSpellings);
  console.log(props.countryProp.region);
  console.log(props.countryProp.languages);

  return countryDetails;
};

export default CountryDetails;
