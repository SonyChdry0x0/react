import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };
  const handleLoClick = () => {
    // console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };
  const handleCapClick = () => {
    // console.log("On change");
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("capitalized the first letter of word", "success");
  };
  const handleClearClick = () => {
    // console.log("On clear");
    let newText = " ";
    setText(newText);
    props.showAlert("clear the text", "success");
  };
  const handleCopy = () => {
    //console.log("copy the text")
    var text = document.getElementById("myBox");
    
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy the text", "success");
  };
  const handleExtraSpaces = () => {
    // console.log("remove the extra spaces")
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Remove the extra spaces", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text="new text"; //wrong way to change the state
  //setText("new text"); //correct way to change the state .
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#284760" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn mx-2 my-1"
          style={{
            backgroundColor: props.themeColor,
            color: "white",
          }}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>

        <button
          disabled={text.length === 0}
          className="btn mx-2 my-1"
          style={{
            backgroundColor: props.themeColor,
            color: "white",
          }}
          onClick={handleLoClick}
        >
          Convert to lowercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn mx-2 my-1"
          style={{
            backgroundColor: props.themeColor,
            color: "white",
          }}
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn mx-2 my-1"
          style={{
            backgroundColor: props.themeColor,
            color: "white",
          }}
          onClick={handleCapClick}
        >
          Capitalize Case
        </button>

        <button
          disabled={text.length === 0}
          className="btn mx-2 my-1"
          style={{
            backgroundColor: props.themeColor,
            color: "white",
          }}
          onClick={handleCopy}
        >
          Copy
        </button>

        <button
          disabled={text.length === 0}
          className="btn mx-2 my-1"
          style={{
            backgroundColor: props.themeColor,
            color: "white",
          }}
          onClick={handleExtraSpaces}
        >
          Remove Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {/* {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and{" "}
          {text.length} characters */}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {/* {0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)}{" "}
          Minutes read */}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "nothing to priview!"}</p>
      </div>
    </>
  );
}
