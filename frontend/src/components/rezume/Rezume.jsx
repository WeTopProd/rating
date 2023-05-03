import React from 'react';
import {Link} from 'react-router-dom'

import h from '../header/header.module.scss'
import m from '../rezume/rezume.module.scss'


import Poisk from '../poisk/Poisk';
import HeaderTho from '../headerTho/HeaderTho';
import KompCard from './KompCard';
import KompDatacard from './Komp.data'
import Port from '../port/Port';

import ster from '../img/abu__ster.svg'
import abu from '../img/abu.png'



function Rezume() {
  return (

  <>

  <HeaderTho />
  
    <div className={m.section__rezume} id='rezume'>
        <div className={h.container}>
            
             <div className={m.rezume}>

                    <p className={m.rezume__title}>Размеcтить резюме</p>

                    <p className={m.rezume__subtitle}>Работа найдется для каждого.</p>

                        
                        <Link to='/' className={m.rezume__link}>
                        Разместить
                        </Link>

            </div> 

            <Link to='/' className={m.rezume__exit}>
            Назад
            </Link>

        </div>
    </div>

    <Poisk />

    <section className={m.section__komp} id='reyting'>
      <div className={h.container}>

        <p className={m.komp_title}>Рейтинг лучших КОМПАНИЙ</p>
        
        <div className={m.komp}>

        { KompDatacard.map( (info, index) => { 
              return <KompCard {...info} key = {index} />
        } ) }

        </div>

      </div>
    </section>


    <section className={m.section__abu} id='abu'>
      <div className={h.container}>
        
      <p className={m.abu__title}>OБУЧЕНИЕ</p>

      <div className={m.abu}>
        
        <div className={m.abu__flex}>

        <div className={m.abu__item}>
          <p className={m.abu__item_title}>Не можешь найти работу?</p>
          <p className={m.abu__item_subtitle}>Не хватает опыта?</p>
          
          <div className={m.abu__item_buttons}>
            <Link to=''className={m.abu__item_buttons_link}>Подробнее</Link>
            <img src={ster} className={m.abu__item_buttons_svg} alt="svg" />
          </div>

        </div>
        


        <img src={abu} alt="img" className={m.abu__img} />

        </div>


        <p className={m.abu__footer}>Тогда тебе к нам !</p>

      </div>

      </div>
    </section>

    <Port />
  
  
  </>

    
  );
}

export default Rezume;
