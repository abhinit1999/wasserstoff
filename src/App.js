import React from 'react'
import "./App.css"
import { Route, Routes } from "react-router";
import Homescreen from './components/Homescreen';
import Searchscreen from './components/Searchscreen';
import Detailscreen from './components/Detailscreen';
import { NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <NavLink className="nav_link"  to="/">Home</NavLink>
    <NavLink className="nav_link"  to="/search">Search By name / City</NavLink>
    <NavLink className="nav_link"  to="/detail/:id">Deatils</NavLink>
          {/* <Homescreen /> */}
      <Routes>
     
        <Route  path="/" element={<Homescreen />}>
      
        </Route>
        <Route path="/search" element={<Searchscreen />}>
          
        </Route>
        <Route path="/detail/:id" element={ <Detailscreen />}>
         
        </Route>
      
    </Routes>

    

    </div>
  )
}

export default App