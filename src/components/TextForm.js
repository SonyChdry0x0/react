import React,{useState} from "react";

export default function TextForm(props) {
    const[text,setText] = useState("Enter text here2");
    const handleUpClick = ()=>{
        console.log("uppercase was clicked");
        setText("you have clicked on handleUpClick")
    }
    const handleOnChange =()=>{
        console.log("Uppercase was clicked");
    }

   // text="new text"; //wrong way to change the state
    //setText("new text"); //correct way to change the state . 
    //
    
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn-btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  );
}
