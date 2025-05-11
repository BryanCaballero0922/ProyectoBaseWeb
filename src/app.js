import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import Login from './pages/Login';


function App() {
const [items, setItems]= useState( [{title: "Progra web", description : "Clase de los sabados"}] );
   return (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route path="/*" element={
        <div style={{marginLeft: '200px', marginTop: '56px', padding: '20px', background: 'red'}}>
          <TopNavbar />
          <SideNavbar />
          <Routes>
            <Route path="/" element={<Home items={items} />} />
            {/* Puedes agregar más subrutas aquí si necesitas */}
          </Routes>
        </div>
      } />
    </Routes>
  </Router>
);
}

export default App;