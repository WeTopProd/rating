import Header from '../components/header/Header'

import h from '../components/header/header.module.scss'
import l from '../tarifRezume/TarifRezume.module.scss'

import cv from '../components/img/cv.png'
import gal from '../components/img/galka.png'

function TarifRezume () {

    return (

        <>

        <Header
        
        link='rezume/#rezume'
        title='Резюме'
        
        link2='rezume/#poisk' 
        title2='Поиск'
        
        link3='rezume/#reyting' 
        title3='Рейтинг'
        
        link4='rezume/#abu' 
        title4='Обучение'
        
        link5='rezume/#port' 
        title5='Партнеры'

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
    
                                <p className={l.form__item__text}>Составляем за вас правильное  резюме
                                </p>
    
                            </div> 
    
                            <button className={l.form__item__link}>200 руб</button>
    
                            
                        </div>
                        
                        <button className={l.form__item__link2}>Выбрать</button>

                    </div>

                    <div className={l.form__flex}>

                        <div className={l.form__item}>
    
                            <img src={cv} alt="img" />
    
                            <p className={l.form__item__titleI}> Тариф стандартный</p>
    
    
                            <div className={l.form__item__middle2}>
    
                                
                                <div className={l.form__item__two}>
    
                                <img src={gal} alt="" width="30px" height="30px" />
    
                                <p className={l.form__item__text}>Составляем за вас правильное  резюме</p>

                                </div>
    
                                <div className={l.form__item__two}>
    
                                
                                <img src={gal} alt="" width="30px" height="30px" />
    
                                <p className={l.form__item__text}>Дополнительно продвигаем ваше резюме в поиске</p>
    
                                </div>
                            
                            </div>
    
    
                            <button className={l.form__item__link}>700 руб</button>
    
    
                        </div>

                        <button className={l.form__item__link2}>Выбрать</button>


                    </div>

                    <div className={l.form__flex}>

                        <div className={l.form__item}>
    
                            <img src={cv} alt="" />
    
                            <p className={l.form__item__titleI}> Тариф профи</p>
    
    
                            <div className={l.form__item__middle}>
    
                                <img src={gal} alt="" width="30px" height="30px" />
    
                                <p className={l.form__item__text}>Составляем продвигаем ваше  резюме до того как вы найдете работу</p>
                            </div>
    
    
                            <button className={l.form__item__link}>2000 руб</button>
    
    
                        </div>

                        <button className={l.form__item__link2}>Выбрать</button>


                    </div>




                </div>

            </div>

            </div>

    </section>
        
        </>


    )
}

export default TarifRezume