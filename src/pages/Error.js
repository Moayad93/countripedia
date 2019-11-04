import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    return (
      <>
        <center>
          <h1 color="red">Oops!</h1>
          <h2>404 - PAGE NOT FOUND</h2>
          <p>We can't seem to find the page you're looking for.</p>
          <p>Go to the <Link to="/">Home</Link> page.</p>
        </center>
      </>
    );
  }
}

export default Error;
