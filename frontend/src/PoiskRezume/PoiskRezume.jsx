import { useState } from 'react'
import Header from '../components/header/Header'
import svg from '../components/img/search-normal.svg'
import { AiOutlineMenu } from "react-icons/ai";

import '../PoiskVakan/Poisk.scss'
import Mycard from '../Myrezume/Mycard';
import axios from 'axios';


export default function PoiksRezume ({onClick, setAuth, auth, mycardId}) {

  const [accordian, setAccordian] = useState(false)

  const openAcc = () => {
    setAccordian(!accordian)
  }

  const throwOff = () => {
    setpoiskvalue('')
    setCity('')
    setExperience('')
    setExperienceDo('')
    setIncome('')
    setIncomeFinaly('')
    setEmployment('')
  }

  const token = JSON.parse(localStorage.getItem("token"));

  const [ poiskvalue, setpoiskvalue] = useState('')

  const [postVakan, setPostVakan] = useState([])

  const [postLoading, setPostLoading] = useState(false)

  const [city , setCity] = useState('') 

  const [experience , setExperience] = useState('') 

  const [experienceDo , setExperienceDo] = useState('') 

  const [income , setIncome] = useState('')

  const [incomeFinaly , setIncomeFinaly] = useState('')

  const [employment , setEmployment] = useState('')

  const PoiskValueVakan = (event) => {

    event.preventDefault()

    axios.get(`http://127.0.0.1:8001/api/resume/?city=${city}&job_title=${poiskvalue}&company_name=&start_salary_min=${income}&final_salary_max=${incomeFinaly}&start_experience_max=${experience}&final_experience_min=${experienceDo}&employment_type=${employment}&is_favorited=`,{

    headers: {
      "content-type": "application/json",
      authorization: `Token ${token}`,
    },

  })

  .then(res => {
     setPostVakan(res.data)
     setPostLoading(true)
     console.log(res.data)
   })

  .catch(err => console.error(err))

  }

    return (
        <>
        
        <Header
        
        link='vakan/#vakan'
        title='Разместить вакансию'
        
        link2='vakan/#poisk' 
        title2='Резюме'
        
        link3='vakan/#reyting' 
        title3='Рейтинг работников'
        
        link4='vakan/#obuch' 
        title4='Обучение'
        
        myRezume = 'Мои вакансии'

        myRezume_link = '/myvakan'
        
        tarif_link= '/tarifvakan'
        
        myLiveVakan = '/myliverezume'

        auth={auth}
        setAuth={setAuth}
        
        />

        <section className='section__posk'>

                
                <div className="poisk">
                    
                <div className="poisk__accordion">

<div className='poisk__accordion_burger' onClick={openAcc} ><AiOutlineMenu /> Фильтр </div>

{accordian &&

<form onSubmit={PoiskValueVakan} className='anumation'>

  

<div className='poisk__accordion' >
<p className='poisk__accordion_text'>Регион</p>


  <select className='poisk__accordion_select' value={city} onChange={(event) => setCity(event.target.value)} >
    <option  value="выберите подходящий">Выберите подходящий</option>
    <option  value="Москва">Москва</option>
    <option  value="Московская область">Московская область</option>
  </select>

</div>

<div className='poisk__accordion' >

<p className='poisk__accordion_text'>Специализация</p>


  <select className='poisk__accordion_select' value={poiskvalue} onChange={(event) => setpoiskvalue(event.target.value)} >
    <option  value="выберите подходящий">Выберите подходящий</option>
    <option  value="Актерское мастерство">Актерское мастерство</option>
    <option  value="Веб-разработчик">Веб-разработчик</option>
    <option  value="Веб-дизайнер">Веб-дизайнер</option>
    <option  value="Пантомима">Пантомима</option>
    <option  value="Клоунада">Клоунада</option>
    <option  value="Ведущий">Ведущий</option>
    <option  value="Бармен">Бармен</option>
    <option  value="Блогер">Блогер</option>
    <option  value="Вокал">Вокал</option>
  </select>

</div>

<div className='poisk__accordion' >

<p className='poisk__accordion_text'>Опыт работы</p>

<input type="number" className='poisk__accordion_selectTwo' placeholder='От'
       value={experience} onChange={(event) => setExperience(event.target.value)}
/>

<input type="number" className='poisk__accordion_selectTwo' placeholder='До'
       value={experienceDo} onChange={(event) => setExperienceDo(event.target.value)} 
/>

</div>

<div className='poisk__accordion' >

<p className='poisk__accordion_text'>Уровень дохода</p>

<input type="number" className='poisk__accordion_selectTwo' placeholder='От'
       value={income} onChange={(event) => setIncome(event.target.value)}
/>


</div>               


<div className='poisk__accordion' >

  <p className='poisk__accordion_text'>Тип занятости</p>

  <select className='poisk__accordion_select' value={employment} onChange={(event) => setEmployment(event.target.value)}>
    <option  value="выберите подходящий">Выберите подходящий</option>
    <option  value="Полная занятость">Полная занятость</option>
    <option  value="Частичная занятость">Частичная занятость</option>
    <option  value="Проектная работа">Проектная работа</option>
    <option  value="Волонтерство">Волонтерство</option>
    <option  value="Частичная">Частичная</option>
    <option  value="Стажировка">Стажировка</option>
  </select>

</div>

<button  onClick={PoiskValueVakan} className='poisk__accordion_btn'>Применить</button>

<button onClick={throwOff} className='poisk__accordion_btn'>Сбросить</button>


</form>

}

{/* <div >

<p className='poisk__accordian_title' onClick={handleOpen5} >Возраст </p>

{show5 && (

  <>

<p className="poisk__accordian_subtitle">
От 18 до 30 
</p>

<p className="poisk__accordian_subtitle">
От 30 лет
</p>

  </>

)}

</div>  */}

{/* <div >

<p className='poisk__accordian_title' onClick={handleOpen6} >Образование </p>

{show6 && (

  <>

<p className="poisk__accordian_subtitle">
Среднее
</p>

<p className="poisk__accordian_subtitle">
Среднее специальное
</p>

<p className="poisk__accordian_subtitle">
Неоконченное высшее
</p>

<p className="poisk__accordian_subtitle">
Высшее
</p>

<p className="poisk__accordian_subtitle">
Бакалавр
</p>

<p className="poisk__accordian_subtitle">
Магистр
</p>

<p className="poisk__accordian_subtitle">
Кандидат наук
</p>

<p className="poisk__accordian_subtitle">
Доктор наук
</p>

  </>

)}

</div>  */}


                </div>

                <div className="poisk__item">
                        
                        <form className="poisk__item_form" onSubmit={PoiskValueVakan} >
            
                            <input value={poiskvalue} onChange={(event) => setpoiskvalue(event.target.value)} name='poisk' type="text" placeholder='Поиск' className="poisk__item_form_input" />
            
                            <img src={svg} onClick={PoiskValueVakan} className="poisk__item_form_svg" alt="svg" />
            
                        </form> 
            
                        {postLoading ?
                        
                            postVakan.map( (info, index) => { 
                                return <Mycard {...info}  key={index} />
                            } ) 
              
                        :
             
                        mycardId.map( (info, index) => { 
                              return <Mycard {...info}  key={index} />
                            } ) 
                        
                        }
            
                                </div>

                </div>

          

        </section>
        
        </>
    )
}