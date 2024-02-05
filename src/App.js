import './App.css';
// import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not

  // useState[alert,setAlert] = useState(null); // this is for alert

  //  const showAlert = (message,type) =>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
      
  //     setAlert(null);
      
  //   },15000);

  //  };
    


    const toggleMode = ()=>{
      if(mode === "light")
      {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      // showAlert("Dark mode has been enable","success");
      document.title = "TextUtils - Dark Mode";
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        // showAlert("Light mode has been enable","success");
        document.title = "TextUtils - Light Mode";
      }

    }

  return (
  <>
  <Router>
  <Navbar title = "textutils" mode={mode} toggleMode={toggleMode}/>
  {/* <Alert alert={alert}/> */}
  <div className="container my-3">


  <Routes>
          <Route exact path="/about" element={<About/>}/>
            
            
               <Route exact path="/" element={<TextForm heading="Enter the text to analyze"  mode={mode} />}/>
              
 </Routes>

        </div>
        

        </Router>
   
    
    
     {/* <About></About> */}
 
  

  </>
  );
}

export default App;
