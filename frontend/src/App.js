import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';


import Home from './components/home/Home'
import Footer from './components/footer/Footer';
import Rezume from './components/rezume/Rezume'
import Vakan from './components/vakan/Vakan';
import ScrollToTop from './components/utils/scrollTop'
import RegAuth from './auth/Reg';
import LoginAuth from './auth/Login';
import Nast from './nast/Nast';
import AddRezume from './AddRezume/AddRezume';
import TarifRezume from './tarifRezume/TarifRezume';
import TarifVakan from './tarifVakan/TarifVakan';
import OplataRezume from './Oplata/OplataRezume';
import Success from './success/Success';
import Preap from './preparning/Preap';
import SuccessTwo from './preparning/Success';
import MyRezume from './Myrezume/Myrezume';
import SuccessThree from './preparning/SuccessThree';
import PreapLoad from './preparning/PreapLoad';
import AddVakan from './AddVakan/AddVakan';
import OplataVakan from './Oplata/OplataVakan';
import SuccessFour from './success/SuccessFour';


function App() {

  const [price, setPrice] = useState('')

  const [priceTwo, setPriceTwo] = useState('')


  return (

  
    <BrowserRouter>

    <div className="app" >

      <ScrollToTop />

        <Routes>

          <Route path='/'  element={<Home />} />

          <Route path='/rezume'  element={<Rezume/>} />

          <Route path='/vakan'  element={<Vakan />} />


          <Route path='/nast'  element={<Nast />} />
          
          <Route path='/addvakan'  element={<AddVakan />} />

          <Route path='/addrezume'  element={<AddRezume />} />

          <Route path='/tarifrezume'  element={<TarifRezume

            price={price} setPrice={setPrice}
           
           />} />
           

          <Route path='/oplatarezume'  element={<OplataRezume price={price} />} />

          <Route path='/oplatavakan'  element={<OplataVakan priceTwo={priceTwo} />} />



          <Route path='/preap'  element={<Preap />} />

          <Route path='/preapload'  element={<PreapLoad />} />

          <Route path='/myrezume'  element={<MyRezume />} />

          <Route path='/tarifvakan'  element={<TarifVakan
          
          priceTwo={priceTwo} setPriceTwo={setPriceTwo}
          
          />} />

          <Route path='/reg'  element={<RegAuth />} />

          <Route path='/login'  element={<LoginAuth />} />

          <Route path='/success'  element={<Success />} />

          <Route path='/successtwo'  element={<SuccessTwo />} />

          <Route path='/successthree'  element={<SuccessThree />} />

          <Route path='/successfour'  element={<SuccessFour />} />

        </Routes>  

         <Footer  />

    </div>
    
    </BrowserRouter>
  );
}

export default App;
