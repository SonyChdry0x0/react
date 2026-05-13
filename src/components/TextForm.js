import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  };
  const handleLoClick = () => {
    // console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  };
  const handleCapClick = () => {
    // console.log("On change");
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("capitalized the first letter of word","success");
  };
  const handleClearClick = () => {
    // console.log("On clear");
    let newText = " ";
    setText(newText);
    props.showAlert("clear the text","success");
  };
  const handleCopy = () => {
    //console.log("copy the text")
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy the text","success");
  };
  const handleExtraSpaces = () => {
    // console.log("remove the extra spaces")
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Remove the extra spaces","success");
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
      <div className="container" style={{color:props.mode ==='dark'?"white":"#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode ==='dark'?"gray":"white",
                    color:props.mode ==='dark'?"white":"#042743"

            }
          }
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          covert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCapClick}>
          Captalized Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Btn
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{color:props.mode ==='dark'?"white":"#042743"}}>
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
        <p>{text.length > 0 ? text : "Enter Something in the text above"}</p>
      </div>
    </>
  );
}
