import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom'
import h from '../header/header.module.scss'

import svg from '../img/logo.png'

import contact from '../img/user_contact.svg'
import like from '../img/user_like.svg'
import chat from '../img/user_chat.svg'
import nast from '../img/user_nast.svg'
import reg from '../img/reg.svg'
import log from '../img/log.svg'
import box from '../header/box.svg'
import axios from 'axios';



function Header (
    
    {
     
     link, title, 
     link2, title2, 
     link3, title3,
     link4, title4,
     link5, title5,
     myRezume,myRezume_link,
     tarif_link,
     myLiveVakan,mylive,auth, setAuth,
     responses__link , responses
    
    }) {

    const [nav, setNav] = useState(false)

    
    const closeSideBar = () => {
        setNav(false)
    }
    
    const [UserNav, setUserNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
        setUserNav(false)
        setOpenai(false)
   }

   const TogglehandleClick = () => {
    setNav(false)
    setOpenai(false)
    setUserNav(!UserNav)
}

    const [Header , setNavbar] = useState (false)

    const changeBackground = () => {
       

        if (window.scrollY >= 100) {

          setNavbar(true)

        } else {

          setNavbar(false)

        }
    }

      useEffect(() => {

        changeBackground()

        window.addEventListener("scroll", changeBackground)

        window.addEventListener("scroll", closeWindowsOnScroll)


      })

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -85; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    } 

    const location = useLocation();

    const signOut = () => {
        localStorage.setItem('auth', JSON.stringify(setAuth(false)))
    }


    const [ support , setSupport ] = useState('') // отправленный текст >>> support

    const [ supportFile , setSupportFile ] = useState('') // file >>> supportFile


    const fotoUpload = (e) => {
        setSupportFile(e.target.files[0])
    }

    const [openAi, setOpenai] = useState(false)

    const OpenAdd = () => {
        setOpenai(!openAi)
        setUserNav(false)
    }

    const [ textOpen, setTextOpen] = useState(false)



    const token = JSON.parse(localStorage.getItem('token'))

    const PreapInfo = (e) => {    

        e.preventDefault()
    
        axios.post('https://reiting.moscow/api/send-email/', {

        description: support,
        file: supportFile,
            
        },
        
        {
            headers : {
            'Content-Type': 'application/json , multipart/form-data',
            authorization: `Token ${token}`
            }            
        }

        
        )

        .then(res => {
            
            setTextOpen(true)
            setSupport('')
            setSupportFile('')
        
        })

    };

    const closeWindowsOnScroll = () => {

        if (window.scrollY >= 300) {

            setOpenai(false)

        }
      };

    return (

        <header className={ Header ? [h.header, h.header_active].join(' ') : [h.header] } >

            <div className={h.container}>
                
        <nav className={h.nav}>


            <Link to='/' className={h.nav__logo}  onClick={closeSideBar} >
                <img src={svg} alt="img" /> 
            </Link>

            <ul className={nav ? [h.nav__ul, h.nav__ul_active].join(' ') : [h.nav__ul] }>

            <p  >
            <HashLink

                 to={`/${link}`}
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >

                   {title}
                    
                  
            </HashLink>
            </p>
            <p>
            <HashLink
                 to={`/${link2}`}
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    {title2} 
            </HashLink>
            </p>

            <p>
            <HashLink

                 to={`/${link3}`}
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    {title3} 

            </HashLink>
            </p>

            <p>
            <HashLink

                 to={`/${link4}`}
                 
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    {title4}
            </HashLink>       
            </p>

            <p >
                 <HashLink  scroll={el => scrollWithOffset(el)}  to={`/${link5}`} className={h.nav__ul__link}  onClick={closeSideBar}>

                 {title5} 

                 </HashLink>
            </p>

            <p >
                 <Link  to='/oplatainfo' className={h.nav__ul__link}  onClick={closeSideBar}>

                 Оплата

                 </Link>
            </p>

            <p >
                 <Link  to='/returninfo' className={h.nav__ul__link}  onClick={closeSideBar}>

                 Возврат

                 </Link>
            </p>

            </ul>


            <div className={h.nav__admin}>
                
                <div className={h.nav__admin_button} onClick={OpenAdd} >
                Обратный звонок
                </div>

                <div className={ openAi ? [h.nav__admin__chat, h.nav__admin__chat__active].join(' ') : [h.nav__admin__chat] }>

                    <div className={h.chat__info}>
                        
                        <p className={h.chat__info__title}>
                        Здравствуйте вас приветствует служба поддержки
                        </p>

                        <p className={h.chat__info__bold}>
                        Отказ от платных услуг и возврат 
                        </p>

                        <p className={h.chat__info__text}>
                        Опишите услугу от каторой 
                        хотите отказаться и по какой 
                        причине.
                        </p>

                    </div>
            
            {textOpen && 
            
            <p className={h.chat__res}>
                Ваше сообщение отправлено в поддержку. В ближайшее время с Вами сважется оператор.
            </p>
            
            }


                    <form onSubmit={PreapInfo}>

                    <div className={h.chat__info__form}>

                        <textarea type="text" className={h.chat__info__form__sms}
                        placeholder='Сообщение...'
                        value={support} onChange={(event) => setSupport(event.target.value)} 
                        />

                        <div className={h.chat__info__form__file}>

                        <input type="file" onChange={fotoUpload} className={h.chat__info__form__file__click}  />

                        <img src={box} alt="svg" />

                        </div>
                    </div>

                    <button type='submit' onClick={PreapInfo} className={h.nav__admin__chat__btn}>
                        Отправить
                    </button>

                    </form>





                </div>

                <div className={h.nav__admin_user} onClick={TogglehandleClick}>

                    {UserNav ? false : true }
                     
              
                    <div className={ UserNav ? [h.nav__admin_user_info ,h.nav__admin_user_info_active].join(' ') : [h.nav__admin_user_info] } >

            

                {location.pathname === '/' ? <> {

                    auth ? <>
                    
                    <div className={h.user}>

                    <img src={nast} alt="svg" />
                    
                    <Link to='/' onClick={signOut}>Выход</Link>

                    </div>

                    

                    </>  

                     :

                     <>

<div  className={h.user}>
    <img src={log} alt="svg" />
    <Link to='/login'>вход</Link>
</div>

<div className={h.user}>
    <img src={reg} alt="svg" />
    <Link to='/reg'>Зарегистрироваться</Link>
</div>
    
</>  

                } </> 
                
                :
                
                <>{
                    !!auth ? <>
 
                    
                    
                    <div className={h.user}>
                        <img src={chat} alt="svg" />
                        <Link to={tarif_link}>Тарифы</Link>
                    </div>
                    
                    <div className={h.user}>
                        <img src={contact} alt="svg" />
                        <Link to={myRezume_link}>{myRezume}</Link>
                    </div>
                    
                    <div className={h.user}>
                        <img src={like} alt="svg" />
                        <Link to={myLiveVakan}>Мои избранные {mylive}</Link>
                    </div>

                   


                    {location.pathname === '/vakan'||
                     location.pathname === '/tarifvakan' ||
                     location.pathname === '/myliverezume'  ||
                     location.pathname === '/myvakan' ||
                     location.pathname === '/oplatavakan' ||
                     location.pathname === '/successfour' ||
                     location.pathname === '/vakanuser' ||
                     location.pathname === '/addvakan' 
                    ?

                    ''
                    :
''

                    }
                    
                    
                                    </> 
                                    
                                    : 


<>

<div className={h.user}>
    <img src={log} alt="svg" />
    <Link to='/login'>вход</Link>
</div>

<div className={h.user}>
    <img src={reg} alt="svg" />
    <Link to='/reg'>Зарегистрироваться</Link>
</div>
    
</> 



                }</> }  


                    </div>
                    
                </div>

                <div className={h.burger} onClick={handleClick}>
                        {nav ? false : true }
                        <span></span>
                </div>

            </div>


            

          

        </nav>
                
            </div>

        </header>


    )

}

export default Header