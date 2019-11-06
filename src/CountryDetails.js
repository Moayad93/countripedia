import React from "react";

const CountryDetails = props => {
  console.log("CountryDetails Component");

  // set state new way
  const [note, setNote] = useState("");

  let countryDetails =
    props.countryProp === undefined ? null : (
      <>
        <section className="row">
          <div className="col-6 text-center bg-warning">
            <img
              src={props.countryProp.flag}
              alt=""
              className=""
              height="125px"
            />
            <h1 className="lead">{props.countryProp.name}</h1>
          </div>
          <div className="col-6 bg-success">
            <p>{props.countryProp.capital}</p>
          </div>
          <div className="col-12 bg-secondary">
            <p>{props.countryProp.capital}</p>
            <p>{props.countryProp.altSpellings}</p>
            <p>{props.countryProp.region}</p>
            <p>{props.countryProp.population}</p>
          </div>
        </section>
        <section className="row">
          <div className="col">
            <div class="form-group">
              <textarea
                class="form-control"
                id="note"
                rows="2"
                placeholder="Add your notes..."
              ></textarea>
              <button className="btn btn-secondary" onClick={() => {}}>
                Add
              </button>
            </div>
            <div className="col hide">
              <p>this.state.comment</p>
              <button className="btn btn-secondary">Edit</button>
            </div>
          </div>
        </section>
      </>
    );

  return countryDetails;
};

export default CountryDetails;
