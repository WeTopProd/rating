import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home'
import Footer from './components/footer/Footer';
import Rezume from './components/rezume/Rezume'
import Vakan from './components/vakan/Vakan';

import ScrollToTop from './components/utils/scrollTop'

function App() {

  const auth = true


  return (

  
    <BrowserRouter>

    <div className="app" >

      <ScrollToTop />

        <Routes>

          <Route path='/'  element={<Home />} />


          <Route path='/rezume'  element={<Rezume />} />


          <Route path='/vakan'  element={<Vakan />} />



        </Routes>  

         <Footer  />

    </div>
    
    </BrowserRouter>
  );
}

export default App;
