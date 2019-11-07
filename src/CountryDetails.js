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
              className="mt-5 shadow"
              height="200px"
            />
            <h1 className="display-4 text-white my-2">
              {props.countryProp.name}
            </h1>
          </div>
          <div className="col-12 p-2">
            <dl class="row lead text-white text-center">
              <dt class="col-sm-3">Capital</dt>
              <dd class="col-sm-9">{props.countryProp.capital}</dd>

              <dt class="col-sm-3">Region</dt>
              <dd class="col-sm-9">{props.countryProp.region}</dd>

              <dt class="col-sm-3">Population</dt>
              <dd class="col-sm-9">{props.countryProp.population}</dd>

              <dt class="col-sm-3">Time</dt>
              <dd class="col-sm-9">{props.countryProp.population}</dd>
            </dl>
          </div>
        </section>
      </>
    );

  return countryDetails;
};

export default CountryDetails;
