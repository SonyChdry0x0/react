import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnClick = () => {
    console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text="new text"; //wrong way to change the state
  //setText("new text"); //correct way to change the state .
  //

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleOnClick}>
          {" "}
          covert to lowercase
        </button>
      </div>
       <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "enter something in the text above"}</p>
      </div>
    </>
  );
}
