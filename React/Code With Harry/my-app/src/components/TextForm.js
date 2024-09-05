import React, {useState} from 'react'

export default function TextForm(props) {


  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to uppercase","success");
  }

  const handleLwClick = () => {
    // console.log("uppercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lowercase","success");
  }

  const handleCtClick = () => {
    let newtext = "";
    setText(newtext);
  }

  const handleCopy = () => {
    var txt = document.getElementById('myBox');
    navigator.clipboard.writeText(txt.value);
    props.showAlert("text copied","success");
  }

  const handleExtraSpace = () => {
    let newtext = text.split(/[ ]+/); 
    setText(newtext.join(" "));
    props.showAlert("Extra Space removed","success");
  }

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  }



  
  const [text,setText] = useState('');


  return (
    <>
    <div className="container" style={{color: props.mode === 'light'?'grey':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}  rows="3" style={{backgroundColor: props.mode === 'light'?'white':'grey',color: props.mode === 'light'?'grey':'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLwClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCtClick}>Clear Text</button> 
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button> 
        
    </div>

    <div className="container my-3" style={{color: props.mode === 'light'?'grey':'white'}}>
      <h2>Text Summary</h2>
      <p> {text.split(" ").length} Words and {text.length} Characters</p>
      <p> {0.008 * text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>

    </>
  )
}
