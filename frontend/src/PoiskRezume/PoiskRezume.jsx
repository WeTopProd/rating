import { useState } from 'react'


import Header from '../components/header/Header'
import svg from '../components/img/search-normal.svg'
import { AiOutlineMenu } from "react-icons/ai";


import '../PoiskVakan/Poisk.scss'
import MyDataCard from '../Myrezume/my.data.card'
import Mycard from '../Myrezume/Mycard';
// import Mycard from '../Myvakan/Mycard';


export default function PoiksRezume ({onClick, setAuth, auth, mycardId}) {

    const [show, setShow] = useState(false);

    const handleOpen = () => {

      setShow(!show); 

    };

    const [show2, setShow2] = useState(false);

    const handleOpen2 = () => {

      setShow2(!show2); 

    };

    const [show3, setShow3] = useState(false);

    const handleOpen3 = () => {

      setShow3(!show3); 

    };

    const [show4, setShow4] = useState(false);

    const handleOpen4 = () => {

      setShow4(!show4); 

    };

    const [show5, setShow5] = useState(false);

    const handleOpen5 = () => {

      setShow5(!show5); 

    };

    const [show6, setShow6] = useState(false);

    const handleOpen6 = () => {

      setShow6(!show6); 

    };

    const [show7, setShow7] = useState(false);

    const handleOpen7 = () => {

      setShow7(!show7); 

    };

    const [show8, setShow8] = useState(false);

    const handleOpen8 = () => {

      setShow8(!show8); 

    };

    const [accordian, setAccordian] = useState(false)

    const openAcc = () => {
      setAccordian(!accordian)
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
                    
    <div className="poisk__accordian">

        <div className='poisk__accordian_burger' onClick={openAcc} ><AiOutlineMenu /> Фильтр </div>

        {accordian &&
        
        <div>

        <div className='poisk__accordion_arr' >

          <p className='poisk__accordian_title' onClick={handleOpen} >Регион</p>

        {show && (

            <>

          <p className="poisk__accordian_subtitle">
            Москва
          </p>

         <p className="poisk__accordian_subtitle">
            Московская область
          </p>
            
            </>
          
        )}

        </div>

        <div >

          <p className='poisk__accordian_title' onClick={handleOpen2} >Специализация</p>

        {show2 && (

            <>

          <p className="poisk__accordian_subtitle">
            Актерское мастерство
          </p>

          <p className="poisk__accordian_subtitle">
          Веб-разработчик
          </p>

          <p className="poisk__accordian_subtitle">
          Веб-дизайнер
          </p>

          <p className="poisk__accordian_subtitle">
          Пантомима
          </p>

          <p className="poisk__accordian_subtitle">
          Клоунада
          </p>

          <p className="poisk__accordian_subtitle">
          Ведущий
          </p>

          <p className="poisk__accordian_subtitle">
          Бильярд
          </p>

          <p className="poisk__accordian_subtitle">
          Стендап
          </p>

          <p className="poisk__accordian_subtitle">
          Бармен
          </p>

          <p className="poisk__accordian_subtitle">
          Блогер
          </p>

          <p className="poisk__accordian_subtitle">
          Вокал
          </p>

          <p className="poisk__accordian_subtitle">
          Степ
          </p>
      
            </>
          
        )}

        </div>

        <div >

          <p className='poisk__accordian_title' onClick={handleOpen3} >Опыт работы</p>

        {show3 && (

            <>

          <p className="poisk__accordian_subtitle">
          Без опыта
          </p>

          <p className="poisk__accordian_subtitle">
          1 год
          </p>

          <p className="poisk__accordian_subtitle">
          2 года
          </p>

          <p className="poisk__accordian_subtitle">
          3 года
          </p>
      
            </>
          
        )}

        </div> 

        <div >

          <p className='poisk__accordian_title' onClick={handleOpen4} >Уровень дохода</p>

        {show4 && (

            <>

          <p className="poisk__accordian_subtitle">
          До 100 000 руб
          </p>

          <p className="poisk__accordian_subtitle">
           от 100 000 руб
          </p>
      
            </>
          
        )}

        </div>                

        <div >

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

        </div> 

        <div >

          <p className='poisk__accordian_title' onClick={handleOpen6} >Образование </p>

        {show6 && (

            <>

          <p className="poisk__accordian_subtitle">
          Высшее
          </p>

          <p className="poisk__accordian_subtitle">
          Неоконченное высшее
          </p>

          <p className="poisk__accordian_subtitle">
          Среднее
          </p>

          <p className="poisk__accordian_subtitle">
          Средне-специальное
          </p>
      
            </>
          
        )}

        </div> 

        <div >

          <p className='poisk__accordian_title' onClick={handleOpen7} >Тип занятости </p>

        {show7 && (

            <>

          <p className="poisk__accordian_subtitle">
          Полная занятость
          </p>

          <p className="poisk__accordian_subtitle">
          Частичная занятость
          </p>

          <p className="poisk__accordian_subtitle">
          Частичная занятость
          </p>

          <p className="poisk__accordian_subtitle">
          Проектная работа
          </p>
      
            </>
          
        )}

        </div>

        <div >

          <p className='poisk__accordian_title' onClick={handleOpen8} >График работы </p>

        {show8 && (

            <>

          <p className="poisk__accordian_subtitle">
          Полный день
          </p>

          <p className="poisk__accordian_subtitle">
          Удаленная работа
          </p>

          <p className="poisk__accordian_subtitle">
          Частичная занятость
          </p>

          <p className="poisk__accordian_subtitle">
          Гибкий график
          </p>
      
            </>
          
        )}

        </div> 


        </div>
        
        }



    </div>

                    <div className="poisk__item">
                        
            <form className="poisk__item_form">

                <input name='poisk' type="text" placeholder='Специальность' className="poisk__item_form_input" />

                <img src={svg} className="poisk__item_form_svg" alt="svg" />

            </form> 

                        {mycardId.map( (info, index) => { 
                            return <Mycard onClick={onClick} {...info}  key={index} />
                        } ) }

                    </div>

                </div>

          

        </section>
        
        </>
    )
}