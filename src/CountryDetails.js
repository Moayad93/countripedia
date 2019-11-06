import React from "react";

const CountryDetails = props => {
  console.log("CountryDetails Component");

  let countryDetails =
    props.countryProp === undefined ? null : (
      <>
        <section className="row">
          <div className="col-12 text-center pb-5 flag-div">
            <img
              src={props.countryProp.flag}
              alt=""
              className="mt-5"
              height="200px"
            />
            <h1 className="lead">{props.countryProp.name}</h1>
          </div>
          <div className="col-12 bg-secondary">
            <p>{props.countryProp.capital}</p>
            <p>{props.countryProp.altSpellings}</p>
            <p>{props.countryProp.region}</p>
            <p>{props.countryProp.population}</p>
          </div>
        </section>
      </>
    );

  return countryDetails;
};

export default CountryDetails;
