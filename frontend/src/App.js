import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home'
import Footer from './components/footer/Footer';
import Rezume from './components/rezume/Rezume'
import Vakan from './components/vakan/Vakan';

import ScrollToTop from './components/utils/scrollTop'
import RegAuth from './auth/Reg';

// import RequireAuth from './hoc/PrivateAuth';
import LoginAuth from './auth/Login';
import Nast from './nast/Nast';
import AddRezume from './AddRezume/AddRezume';
import TarifRezume from './tarifRezume/TarifRezume';
// import Danie from './nast/Danie';

// </RequireAuth>

function App() {


  return (

  
    <BrowserRouter>

    <div className="app" >

      <ScrollToTop />

        <Routes>

          <Route path='/'  element={<Home />} />

          <Route path='/rezume'  element={<Rezume />} />

          <Route path='/vakan'  element={<Vakan />} />

          <Route path='/nast'  element={<Nast />} />

          <Route path='/addrezume'  element={<AddRezume />} />
          
          <Route path='/tarifrezume'  element={<TarifRezume />} />


          <Route path='/reg'  element={<RegAuth />} />

          <Route path='/login'  element={<LoginAuth />} />


        </Routes>  

         <Footer  />

    </div>
    
    </BrowserRouter>
  );
}

export default App;
