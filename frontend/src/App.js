import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';


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
import Otziv from './Myrezume/User/Otziv';
import OtzivVakan from './Myvakan/User/Otziv';
import PoiksVakan from './PoiskVakan/PoiskVakan';
import PoiksRezume from './PoiskRezume/PoiskRezume';
import MyLiveVakan from './myLiveVakan/MyLiveVakan';
import MyLiveRezume from './myLiveRezume/MyLiveRezume';
import TarifNumber from './Myrezume/tarifnumber/TarifNumber';
import OplataNumber from './Myrezume/tarifnumber/OplataNumber';
import SuccessFive from './Myrezume/tarifnumber/seccessFive';


function App() {

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    
   
    if(auth) {
      localStorage.setItem('auth', JSON.stringify(auth))
    } else
    if(localStorage.getItem('auth') !== 'undefined'){


      setAuth(JSON.parse(localStorage.getItem('auth')))
    }


  }, [auth])

  const [price, setPrice] = useState('')

  const [priceTwo, setPriceTwo] = useState('')

  const [priceThree, setPriceThree] = useState('')


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
 

const ClickId = (id) => {
          
             
  setCardMassiv(MyDataCard.filter((info) => info.CardId === +id ) )
      
 
};

const ClickIdTwo = (id) => {
          
             
  setCardMassivTwo(MyDataCardTwo.filter((info) => info.CardIdTwo === +id ) )
      
 
};

  const [uservaka,setUservakan] = useState(false)


  function applicants () {
    setUservakan(true)

  }

  function employer () {
    setUservakan(false)

  }


  return (

    <ContextTwo>

    <BrowserRouter>

    <div className="app" >

      <ScrollToTop />

        <Routes>

          <Route path='/'  element={<Home employer={employer} applicants={applicants} auth={auth} setAuth={setAuth} />} />

          <Route path='/rezume'  element={<Rezume auth={auth} setAuth={setAuth}  />} />

          <Route path='/vakan'  element={<Vakan auth={auth} setAuth={setAuth} />} />

          <Route path='/nast'  element={<Nast auth={auth} setAuth={setAuth} />} />
          
          <Route path='/addvakan'  element={<AddVakan auth={auth} setAuth={setAuth} />} />

          <Route path='/addrezume'  element={<AddRezume auth={auth} setAuth={setAuth} />} />

          <Route path='/tarifrezume'  element={<TarifRezume

            price={price} setPrice={setPrice}
            auth={auth} setAuth={setAuth}
           
           />} />
           
          <Route path='/oplatarezume'  element={<OplataRezume price={price} auth={auth} setAuth={setAuth} />} />

          <Route path='/oplatavakan'  element={<OplataVakan priceTwo={priceTwo} auth={auth} setAuth={setAuth} />} />

          <Route path='/oplatanumber'  element={<OplataNumber priceThree={priceThree} auth={auth} setAuth={setAuth} />} />


          <Route path='/leadvakan'  element={<LeadVakan auth={auth} setAuth={setAuth}/>} />

          <Route path='/preap'  element={<Preap  auth={auth} setAuth={setAuth}/>} />

          <Route path='/preapload'  element={<PreapLoad auth={auth} setAuth={setAuth} />} />

          <Route path='/myrezume'  element={<MyRezume onClick={ClickId} auth={auth} setAuth={setAuth} />} />

          <Route path='/poiksvakan'  element={<PoiksVakan auth={auth} setAuth={setAuth} cardMassivTwo={cardMassivTwo} onClick={ClickIdTwo} />} /> 

          <Route path='/poiksrezume'  element={<PoiksRezume auth={auth} setAuth={setAuth}  cardMassiv={cardMassiv} onClick={ClickId} />} /> 

          <Route path='/myvakan' element={<MyVakan auth={auth} setAuth={setAuth}  onClick={ClickIdTwo}  />} />
        
          <Route path='/tarifvakan'  element={<TarifVakan
          
          priceTwo={priceTwo} setPriceTwo={setPriceTwo}
          auth={auth} setAuth={setAuth}
          
          />} />

          <Route path='/reg'  element={<RegAuth  auth={auth} setAuth={setAuth}/>} />

          <Route path='/login'  element={<LoginAuth auth={auth} setAuth={setAuth} />} />

          <Route path='/success'  element={<Success auth={auth} setAuth={setAuth} />} />

          <Route path='/successtwo'  element={<SuccessTwo auth={auth} setAuth={setAuth} />} />

          <Route path='/successthree'  element={<SuccessThree auth={auth} setAuth={setAuth} />} />

          <Route path='/successfive'  element={<SuccessFive auth={auth} setAuth={setAuth} />} />

          <Route path='/successfour'  element={<SuccessFour auth={auth} setAuth={setAuth} />} />

          <Route path='/successvakan'  element={<SuccessVakan auth={auth} setAuth={setAuth} />} />

          <Route path='/rezumeuser'  element={<RezumeUser  auth={auth} setAuth={setAuth} uservaka={uservaka} cardMassiv={cardMassiv} />} />

          <Route path='/otzivuser'  element={<Otziv auth={auth} setAuth={setAuth}  cardMassiv={cardMassiv} />} />

          <Route path='/vakanuser'  element={<UserVakan auth={auth} setAuth={setAuth}  cardMassivTwo={cardMassivTwo} />} />

          <Route path='/otzivuservakan'  element={<OtzivVakan auth={auth} setAuth={setAuth}  cardMassivTwo={cardMassivTwo} />} />

          <Route path='/mylivevakan'  element={<MyLiveVakan auth={auth} setAuth={setAuth} onClick={ClickIdTwo} />} />

          <Route path='/myliverezume'  element={<MyLiveRezume auth={auth} setAuth={setAuth}   onClick={ClickId} />} />

          <Route path='/tarifnumber'  element={<TarifNumber auth={auth} setAuth={setAuth} priceThree={priceThree} setPriceThree={setPriceThree}  />} />

        </Routes>  

         <Footer  />

    </div>
    
    </BrowserRouter>

    </ContextTwo>
  );
}

export default App;
