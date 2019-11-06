// import React, { useState } from "react";
import React, { Component } from "react";

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
      noteParagraphValue: this.state.textAreaValue
    });
  };

  render() {
    return (
      <div className="col-6 mx-auto">
        <div className="form-group W-100">
          <textarea
            className="form-control"
            id="note"
            rows="4"
            placeholder="Kindly, add your review and recommendation..."
            onChange={this.handleChange}
          ></textarea>
          <button className="btn btn-secondary" onClick={this.handleClick}>
            Add
          </button>
        </div>
        <div className="col">
          <p>{this.state.noteParagraphValue}</p>
          <button className="btn btn-secondary">Edit</button>
        </div>
      </div>
    );
  }
}

export default Review;
