import {Routes,Route, BrowserRouter} from "react-router-dom"
import React from "react"
import Home from "./Pages/Home"
import "../src/App.css"
import Navbar from "./Components/Navbar/Navbar.jsx"



function App(){  

	return (
    
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <div className="global"> 
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
	)
}

export default App