import { HashLink } from 'react-router-hash-link';


import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import h from '../header/header.module.scss'

import svg from '../img/logo.png'
import mail from '../img/user_mail.svg'
import contact from '../img/user_contact.svg'
import like from '../img/user_like.svg'
import chat from '../img/user_chat.svg'
import nast from '../img/user_nast.svg'

function HeaderThree () {

    const [nav, setNav] = useState(false)
  
    const closeSideBar = () => {
        setNav(false)
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

    const [UserNav, setUserNav] = useState(false)

    const handleClick = () => {
         setNav(!nav)
         setUserNav(false)
    }
 
    const TogglehandleClick = () => {
     setNav(false)
     setUserNav(!UserNav)
    }
       
      


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
                 to="/vakan/#vakan"
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    Разместить вакансию
            </HashLink>
            </p>

            <p>
            <HashLink
                 to="/rezume"
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    Резюме 
            </HashLink>
            </p>

            <p>
            <HashLink
                 to="/vakan/#reyting"
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    Рейтинг работников 
            </HashLink>
            </p>

            <p>
            <HashLink
                 to="/vakan/#obuch"
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    Обучение
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
                       

                        <div className={h.user}>
                            <img src={mail} alt="svg" />
                            <Link to=''>Чаты</Link>
                        </div>

                        <div className={h.user}>
                            <img src={chat} alt="svg" />
                            <Link to=''>Тарифы</Link>
                        </div>

                        <div className={h.user}>
                            <img src={contact} alt="svg" />
                            <Link to=''>Мои резюме</Link>
                        </div>

                        <div className={h.user}>
                            <img src={like} alt="svg" />
                            <Link to=''>Мои избранные вакансии</Link>
                        </div>

                        <div className={h.user}>
                            <img src={nast} alt="svg" />
                            <Link to=''>Настройки</Link>
                        </div>

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

export default HeaderThree