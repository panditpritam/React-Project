import React, { useState } from "react";

export default function Textform(props) {
  const handleUpclick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnchange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Your text here");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnchange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
