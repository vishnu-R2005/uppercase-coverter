import React,{useState} from 'react';
import PropTypes from 'prop-types';


export default function Textform(props) {
const [text, setText] = useState("this is my text");

const data=()=>
{
    console.log("log out from the data")
}
const handleupclick=()=>{
    // console.log("uppercase")
    let newtext=text.toUpperCase()
    setText(newtext)
}
const handleonchange=(event)=>{
    console.log("onchange")
    setText(event.target.value)
}
//   setText("this i sthe 22222")
  return (
    <div className="form-floating m-4">
      <h1>{props.heading}</h1>
      <textarea
        className="form-control"
        id="floatingTextarea2"
        style={{ height: "100px" }}
      value={text} onChange={handleonchange}></textarea>
      <button class="btn btn-primary mt-3" onClick={handleupclick}>convert to uppercase</button>
    </div>
  );
}

Textform.propTypes = {
  heading: PropTypes.string, // remove isRequired
};

Textform.defaultProps = {
  heading: "This is the heading using props default value",
};
