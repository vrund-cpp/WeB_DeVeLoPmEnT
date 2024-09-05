import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';   
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1700);
  }

  const togglemode = ()=> {
    if(mode === 'dark'){
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
    }
    else{
      setmode('dark');  
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode has been enabled","success");
    }
  }

  return (
    <>
      <Navbar title="ediText" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />        
      <div className="container my-3">
        <TextForm heading="Application Form" mode={mode} showAlert={showAlert}/>  
      </div>  
      {/* <About /> */}

      
    </>
  );
}

export default App;
