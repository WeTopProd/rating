import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext, useState } from 'react';


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
import MyVakan from './Myvakan/Myvakan';
import SuccessVakan from './preparning/SuccessVakan';
import LeadVakan from './AddVakan/leadVakan';
import RezumeUser from './Myrezume/User/RezumeUser';
import { myContext } from './Context';
import MyDataCard from './Myrezume/my.data.card';
import MyDataCardTwo from './Myvakan/my.data.card'
import ContextTwo from './ContextVakan';
import UserVakan from './Myvakan/User/UserVakan';


function App() {

  const [price, setPrice] = useState('')

  const [priceTwo, setPriceTwo] = useState('')

  const [

    FullName, setFullName,
    data , setData,
    city , setCity,
    address , setAddress,
    education , setEducation,
    AddEducation , setAddEducation,
    placeWork , setPlaceWork,
    postwork , setPostwork,
    DataStart , setDataStart,
    DataEnd , setDataEnd,
    About , setAbout,
    skills , setSkills,
    startSalary , setStartSalary,
    endSalary , setEndSalary,

] = useContext(myContext)

const [cardMassiv, setCardMassiv] = useState(MyDataCard)

const [cardMassivTwo, setCardMassivTwo] = useState(MyDataCardTwo)

console.log(cardMassiv);

 

const ClickId = (id) => {
          
             
  setCardMassiv(MyDataCard.filter((info) => info.CardId === +id ) )
      
 
};

const ClickIdTwo = (id) => {
          
             
  setCardMassivTwo(MyDataCardTwo.filter((info) => info.CardIdTwo === +id ) )
      
 
};





  return (

    <ContextTwo>

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

          <Route path='/leadvakan'  element={<LeadVakan/>} />

          <Route path='/preap'  element={<Preap />} />

          <Route path='/preapload'  element={<PreapLoad />} />

          <Route path='/myrezume'  element={<MyRezume onClick={ClickId} />} />

          <Route path='/myvakan' element={<MyVakan  onClick={ClickIdTwo}  />} />
        
          <Route path='/tarifvakan'  element={<TarifVakan
          
          priceTwo={priceTwo} setPriceTwo={setPriceTwo}
          
          />} />

          <Route path='/reg'  element={<RegAuth />} />

          <Route path='/login'  element={<LoginAuth />} />

          <Route path='/success'  element={<Success />} />

          <Route path='/successtwo'  element={<SuccessTwo />} />

          <Route path='/successthree'  element={<SuccessThree />} />

          <Route path='/successfour'  element={<SuccessFour />} />

          <Route path='/successvakan'  element={<SuccessVakan />} />

          <Route path='/rezumeuser'  element={<RezumeUser  cardMassiv={cardMassiv} />} />

          <Route path='/vakanuser'  element={<UserVakan  cardMassivTwo={cardMassivTwo} />} />


        </Routes>  

         <Footer  />

        

    </div>
    
    </BrowserRouter>

    </ContextTwo>
  );
}

export default App;
