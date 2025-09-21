import React,{useState} from 'react';
import PropTypes from 'prop-types';

export default function Textform(props) {
const [text, setText] = useState("this is my text");

const data=()=>
{
    console.log("log out from the data")
}
const handleupclick=(props)=>{
    // console.log("uppercase")
    let newtext=text.toUpperCase()
    setText(newtext)
}
const handlelwclick=(props)=>{
    // console.log("uppercase")
    let newtext=text.toLowerCase()
    setText(newtext)
}
const handleonchange=(event)=>{
    console.log("onchange")
    setText(event.target.value)
}
//   setText("this i sthe 22222")
  return (
    <>
    <div className="form-floating m-4">
      <h1>{props.heading}</h1>
      <textarea
        className="form-control"
        id="floatingTextarea2"
        style={{ height: "100px" }}
      value={text} onChange={handleonchange}></textarea>
      <button class="btn btn-primary mt-3 m-5" onClick={handleupclick}>convert to uppercase</button>
      <button class="btn btn-primary  mt-3 m-5" onClick={handlelwclick}>convert to lowercase</button>
    </div>
    <div>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} word and {text.length} charectors
      </p>
      <p>time will take to read is:{0.008*text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string, // remove isRequired
};

Textform.defaultProps = {
  heading:"enter your text here:="
};
