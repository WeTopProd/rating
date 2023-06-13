
import { useEffect, useState } from 'react'
import Mycard from '../Myvakan/Mycard'

import Header from '../components/header/Header'
import svg from '../components/img/search-normal.svg'
import { AiOutlineMenu } from "react-icons/ai";

import './Poisk.scss'
import axios from 'axios';

export default function PoiksVakan ({ auth, setAuth, myVakanId}) {

    const [accordian, setAccordian] = useState(false)

    const openAcc = () => {
      setAccordian(!accordian)
    }

    const token = JSON.parse(localStorage.getItem("token"));

    const [ poiskvalue, setpoiskvalue] = useState('')

    const [postVakan, setPostVakan] = useState([])

    const [postLoading, setPostLoading] = useState(false)

  

    const PoiskValueVakan = (event) => {

      event.preventDefault()

      axios.get(`http://127.0.0.1:8001/api/vacancy/?job_title=${poiskvalue}&company_name=&final_salary=&start_experience=&final_experience=&is_favorited=`, {

      headers: {
        "content-type": "application/json",
        authorization: `Token ${token}`,
      },

    })

    .then(res => {
       setPostVakan(res.data)
       setPostLoading(true)
     })

    .catch(err => console.error(err))

    }


    return (
        <>
        
        <Header
        
        link='rezume/#rezume'
        title='Резюме'
                
        link3='rezume/#reyting' 
        title3='Рейтинг'
        
        link4='rezume/#abu' 
        title4='Обучение'
        
        link5='rezume/#port' 
        title5='Партнеры'
        
        myRezume = 'Мои резюме'

        myRezume_link = '/myrezume'
        
        tarif_link= '/tarifrezume'
        
        myLiveVakan = '/myLiveVakan'
        
        auth={auth}
        setAuth={setAuth}
        />

        <section className='section__posk'>

                
                <div className="poisk">
                    
    <div className="poisk__accordion">

        <div className='poisk__accordion_burger' onClick={openAcc} ><AiOutlineMenu /> Фильтр </div>

        {accordian &&
        
        <div className='anumation'>

        <div className='poisk__accordion' >
        <p className='poisk__accordion_text'>Регион</p>


          <select className='poisk__accordion_select'>
            <option  value="выберите подходящий">Выберите подходящий</option>
            <option  value="Москва">Москва</option>
            <option  value="Московская область">Московская область</option>
          </select>

        </div>

        <div className='poisk__accordion' >

        <p className='poisk__accordion_text'>Специализация</p>


          <select className='poisk__accordion_select'>
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


          <select className='poisk__accordion_select'>
            <option  value="выберите подходящий">Выберите подходящий</option>
            <option  value="от 1 до 3 года">от 1 до 3 года</option>
            <option  value="от 3 до 6 года">от 3 до 6 года</option>
            <option  value="от 6 года">от 6 года</option>
          </select>

        </div>

        <div className='poisk__accordion' >

        <p className='poisk__accordion_text'>Уровень дохода</p>


          <select className='poisk__accordion_select'>
            <option  value="выберите подходящий">Выберите подходящий</option>
            <option  value="До 100 000 руб">До 100 000 руб</option>
            <option  value="от 100 000 руб">от 100 000 руб</option>
          </select>

        </div>               

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

        <div className='poisk__accordion' >

          <p className='poisk__accordion_text'>Тип занятости</p>

          <select className='poisk__accordion_select'>
            <option  value="выберите подходящий">Выберите подходящий</option>
            <option  value="Полная занятость">Полная занятость</option>
            <option  value="Частичная занятость">Частичная занятость</option>
            <option  value="Проектная работа">Проектная работа</option>
            <option  value="Волонтерство">Волонтерство</option>
            <option  value="Частичная">Частичная</option>
            <option  value="Стажировка">Стажировка</option>
          </select>

        </div>

        <button className='poisk__accordion_btn'>Применить</button>

        </div>
        
        }



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
 
                myVakanId.map( (info, index) => { 
                  return <Mycard {...info}  key={index} />
                } ) 
            
            }

                    </div>

                </div>

                {/* myVakanId */}

        </section>
        
        </>
    )
}