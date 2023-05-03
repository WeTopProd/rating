import React from 'react';

import p from '../poisk/poisk.module.scss'
import h from '../header/header.module.scss'

import svg from '../img/search-normal.svg'
import { Link } from 'react-router-dom';



function Poisk() {
  return (

  <>
  
    <div className={p.section__poisk} id='poisk'>
        <div className={h.container}>

            <p className={p.poisk__title}>
            поиск
            </p>
            
             <div className={p.poisk}>
            
            <p className={p.poisk__subtitle}>
            Найди подходящую для себя вакансию!
            </p>

            <form className={p.poisk__form}>

                <Link to='/'>

                <input name='poisk' type="text" placeholder='Специальность' className={p.poisk__form_input} />

                </Link>

                <img src={svg} className={p.poisk__form_svg} alt="svg" />

            </form>

            <div className={p.poisk__footer}>

                <Link to='/' className={p.poisk__footer_button}>
                Все вакансии
                </Link>

                <div className={p.poisk__footer_ishut}>
                    <p className={p.poisk__footer_ishut_text}>Часто ищут:</p>
                    <Link to='/' className={p.poisk__footer_ishut_link}>web-designer</Link>
                    <Link to='/' className={p.poisk__footer_ishut_link}>web-developer</Link>
                </div>

            </div>

            </div> 

        </div>
    </div>


    
  
  
  </>

    
  );
}

export default Poisk;