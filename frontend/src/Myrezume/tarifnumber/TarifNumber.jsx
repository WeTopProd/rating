import Header from '../../components/header/Header'

import h from '../../components/header/header.module.scss'

import l from './TarifNumber.module.scss'

import cv from '../../components/img/cv.png'
import gal from '../../components/img/galka.png'

import { Link } from 'react-router-dom'

export default function TarifNumber({ auth, setAuth , setPriceThree}) {

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
        
        <section className={l.section__form}>

        <div className={h.container}>

            <div className={l.form}>

                <p className={l.form__title}>Тарифы</p>

                <div className={l.form__wrapper}>

                    <div className={l.form__flex}>

                        <div className={l.form__item}>
    
                            <img src={cv} alt="" />
    
                            <p className={l.form__item__titleI}> Тариф базовый</p>
    
                            <div className={l.form__item__middle}>
    
                                <img src={gal} alt="" width="30px" height="30px" />
    
                                <p className={l.form__item__text}>Разблокировать один номер телефона для отклика на резюме
                                </p>
    
                            </div> 

    
                            <button className={l.form__item__link}>50 руб</button>
    
                            
                        </div>
                        
                        <Link to='/oplatanumber' onClick={() => setPriceThree('50')} className={l.form__item__link2}>Выбрать</Link>

                    </div>

                    <div className={l.form__flex}>

                        <div className={l.form__item}>
    
                            <img src={cv} alt="img" />
    
                            <p className={l.form__item__titleI}> Тариф стандартный</p>
    
    
                            <div className={l.form__item__middle2}>
    
                                
                                <div className={l.form__item__two}>
    
                                <img src={gal} alt="" width="30px" height="30px" />
    
                                <p className={l.form__item__text}>Разблокировать 10 номеров для отклика на резюме</p>

                                </div>
    

                            
                            </div>
    
    
                            <button className={l.form__item__link}>400 руб</button>

    
                        </div>

                        <Link to='/oplatanumber' onClick={() => setPriceThree('400')} className={l.form__item__link2}>Выбрать</Link>


                    </div>

                    <div className={l.form__flex}>

                        <div className={l.form__item}>
    
                            <img src={cv} alt="" />
    
                            <p className={l.form__item__titleI}> Тариф профи</p>
    
    
                            <div className={l.form__item__middle}>
    
                                <img src={gal} alt="" width="30px" height="30px" />
    
                                <p className={l.form__item__text}>Безлимитный доступ к номерам на 30 дней</p>
                            </div>

    
    
                            <button className={l.form__item__link}>2000 руб</button>
    
    
                        </div>

                        <Link to='/oplatanumber' onClick={() => setPriceThree('2000')} className={l.form__item__link2}>Выбрать</Link>


                    </div>




                </div>

            </div>

            </div>

    </section>
        
        </>


    )
}

