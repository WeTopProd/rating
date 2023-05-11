import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom'
import h from '../header/header.module.scss'

import svg from '../img/logo.png'

import mail from '../img/user_mail.svg'
import contact from '../img/user_contact.svg'
import like from '../img/user_like.svg'
import chat from '../img/user_chat.svg'
import nast from '../img/user_nast.svg'
import reg from '../img/reg.svg'
import log from '../img/log.svg'



function Header (
    
    {
     
     link, title, 
     link2, title2, 
     link3, title3,
     link4, title4,
     link5, title5,
     myRezume,myRezume_link,
     tarif_link,
     myLiveVakan
    
    }) {

    const [nav, setNav] = useState(false)

    
    const closeSideBar = () => {
        setNav(false)
    }
    
    const [UserNav, setUserNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
        setUserNav(false)
   }

   const TogglehandleClick = () => {
    setNav(false)
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

      })

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -85; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    } 

    const location = useLocation();

    

    // const homeLoc = location.pathname = '/'


    // console.log(homeLoc)

    const auth = true
      


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

            </ul>


            <div className={h.nav__admin}>
                
                <Link to="tel:+79999999999" className={h.nav__admin_button}>
                Обратный звонок
                </Link>

                <div className={h.nav__admin_user} onClick={TogglehandleClick}>

                    {UserNav ? false : true }
                     
              
                    <div className={ UserNav ? [h.nav__admin_user_info ,h.nav__admin_user_info_active].join(' ') : [h.nav__admin_user_info] } >

            

                {location.pathname === '/' ? <> {

                    !!auth ? <>
                    
                    <div className={h.user}>

                    <img src={nast} alt="svg" />
                    
                    <Link to='/'>Выход</Link>

                    </div>

                    

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

                }</> 
                
                :
                
                <>{
                    !!auth ? <>
 
                    
                    <div className={h.user}  >
                        <img src={mail} alt="svg" />
                        <Link to=''>Чаты</Link>
                    </div>
                    
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
                        <Link to={myLiveVakan}>Мои избранные вакансии</Link>
                    </div>
                    
                    <div className={h.user}>
                        <img src={nast} alt="svg" />
                        <Link to='/nast'>Настройки</Link>
                    </div>
                    
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