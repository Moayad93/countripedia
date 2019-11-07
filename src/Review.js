// import React, { useState } from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

// const Review = props => {
//   // state in new way
//   const [noteParagraphValue, setNoteParagraph] = useState("");

//   // state in new way
//   const [textAreaValue, setTextArea] = useState("");

//   const handleClick = event => {
//     event.preventDefault();
//     setNoteParagraph(textAreaValue);

//     console.log(textAreaValue);
//   };

//   const handleChange = event => {
//     setTextArea(event.target.value);
//     console.log(textAreaValue, event.target.value);
//   };

//   return (
//     <div className="col-6 mx-auto">
//       <div className="form-group W-100">
//         <textarea
//           className="form-control"
//           id="note"
//           rows="4"
//           placeholder="Kindly, add your review and recommendation..."
//           onChange={handleChange}
//         ></textarea>
//         <button className="btn btn-secondary" onClick={handleClick}>
//           Add
//         </button>
//       </div>
//       <div className="col">
//         <p>{noteParagraphValue}</p>
//         <button className="btn btn-secondary">Edit</button>
//       </div>
//     </div>
//   );
// };

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteParagraphValue: [],
      textAreaValue: []
    };
  }

  handleChange = event => {
    this.setState({
      textAreaValue: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();

    this.setState({
      noteParagraphValue: this.state.textAreaValue,
      textAreaValue: ""
    });
  };

  handleEdit = event => {
    event.preventDefault();

    this.setState({
      textAreaValue: this.state.noteParagraphValue
    });
  };

  render() {
    return (
      <>
        <section className="col-12 text-left">
          <Link to="/">
            <button className="btn btn-sm btn-warning my-4">
              &#8592; Back
            </button>
          </Link>
        </section>
        <div className="col-6 mx-auto mt-5 py-5">
          <div className="form-group W-100 mt-5">
            <textarea
              className="form-control"
              id="note"
              rows="4"
              placeholder="Kindly, add your review and recommendation..."
              onChange={this.handleChange}
              value={this.state.textAreaValue}
            ></textarea>
          </div>
          <div className="col text-center">
            <p className="lead text-white">{this.state.noteParagraphValue}</p>
            <button className="btn btn-success" onClick={this.handleClick}>
              Add
            </button>
            &nbsp;
            <button className="btn btn-info" onClick={this.handleEdit}>
              Edit
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Review;
