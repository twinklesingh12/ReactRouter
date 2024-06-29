import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import { RouterProvider, createBrowserRouter } from "react-router-dom"

function App() {
  
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert()
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#326B94';
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
  }

  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /><Alert alert={alert} />,<TextForm showAlert={showAlert} heading="Enter the text here :" mode={mode}/></>
    },
    {
      path:"About",
      element:<><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /><Alert alert={alert} />,<About/></>
    }
    
  ])
  return (
    <> 
      <RouterProvider router={router}/>
      
    </>
    )
  }
export default App;
      {/* 
        <Alert alert={alert} />
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <About />
        <TextForm showAlert={showAlert} heading="Enter the text here :" mode={mode} />
      </div> */}
    
  


