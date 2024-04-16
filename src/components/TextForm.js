import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","succeess")
    }
    const handleOnChange = (event) =>{
        console.log("onchange");
        setText(event.target.value)
    }

    const handleLoClick = () =>{
        console.log("lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () =>{
        
        let newText = " ";
        setText(newText)
    }
    const handleExtraSpacs = () =>{
        
        let newText = text.split(/[ ]+/);
        setText(newText.join(""))
    }

    const [text, setText] = useState('enter the text here2');
    // setText("new text");// is used to chane the text 


  return (
    <>
    <div className='container' style={{color: props.mode ==="dark"?"white" : "black"}}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
       
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==="dark"?"grey" : "white",
        color: props.mode ==="dark"?"#13466e" : "white"}} id="myBox" rows="10"></textarea>
        </div>
         <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
         <button disabled = {text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
         <button  disabled = {text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clera Text</button>
         <button disabled = {text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpacs }>ReomveExtraSpace</button>

    </div>
    <div className="container my-2" style={{color: props.mode ==="dark"?"white" : "black"}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words,and {text.length}</p>
        <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"nothing to preview!"}</p>
    </div>
    </>
  )
}
