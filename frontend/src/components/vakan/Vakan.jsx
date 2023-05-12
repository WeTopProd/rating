import React from 'react';
import {Link} from 'react-router-dom'

import h from '../header/header.module.scss'
import m from '../vakan/vakan.module.scss'


import Poisk from '../poisk/Poisk';
import Header from '../header/Header';

import VakanDataCard from './Vakan.data'
import VakanCard from './VakanCard';





function Vakan () {
    return(

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

myRezume = 'Мои вакасии'
myRezume_link = '/fefe'

tarif_link= '/tarifvakan'


 />
    
    <div className={m.section__rezume} id='vakan'>
        <div className={m.container}>
            
             <div className={m.rezume}>

                    <p className={m.rezume__title}>Разместите вакансию</p>

                    <p className={m.rezume__subtitle}>И находите сотрудников среди тех, кто хочет у вас работать.</p>

                        
                        <Link to='/addvakan' className={m.rezume__link}>
                        Разместить
                        </Link>

            </div> 

            <Link to='/' className={m.rezume__exit}>
            Назад
            </Link>

        </div>
    </div>

    <Poisk />

    <div className={m.section__reyting} id='reyting'>
        <div className={h.container}>
            
            <p className={m.reyting__title}>
            Рейтинг лучших работников
            </p>

            <div className={m.reyting} >

            { VakanDataCard.map( (info, index) => { 
              return <VakanCard {...info} key = {index} />
        } ) }
            
            </div>

        </div>
    </div>

    <div className={m.section__obuch} id='obuch'>
        <div className={h.container}>

            <p className={m.obuch__title}>
            обучите ваших сотрудников
            </p>
            
            <div className={m.obuch}>

                <div className={m.obuch__item}>
                    
                    <p className={m.obuch__item_text}> <span></span> Повышение квалификации </p>

                    <p className={m.obuch__item_text}>  <span></span> широкий спектр дисциплин </p>

                    <p className={m.obuch__item_text}>  <span></span> ОПЫТНЫЕ  преподаватели </p>

                </div>

                <Link to='/' className={m.obuch__link}>
                Подробнее
                </Link>

            </div>

        </div>
    </div>
        
        </>


    )
}

export default Vakan