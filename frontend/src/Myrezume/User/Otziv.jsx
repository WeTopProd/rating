

import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import './Otziv.scss'

export default function Otziv (cardMassiv) {

    const [mas, setMas] = useState(cardMassiv.cardMassiv)
    const [result, setResult] = useState(null)

    // setMas(cardMassiv)

    useEffect(() => {
        if(mas) {
            setResult(mas[0]) 
        }
    }, [mas])

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

        myRezume = 'Мои резюме'
        myRezume_link = '/fd'
        
        tarif_link= '/tarifrezume'
        
        myLiveVakan = '/myLiveVakan'
        
        />

<section className="sectionRecomendation">

    <div className="container">

        <div className="recomendation">

            <div className="recomendation__box">

                <div className="recomendation__box_avatarAnd">

                    <img className="recomendation__box_avatarAnd_avatar" src={result === null ? '' : result.avatar} alt="" />

                    <div className="recomendation__box_avatarAnd_pshki">

                    <p className="recomendation__box_avatarAnd_pshki_bold">
                        {result === null ? '' : result.name}  {result === null ? '' : result.surname}
                    </p>

                    <p className="recomendation__box_avatarAnd_pshki_text">
                    {result === null ? '' : result.years} {result === null ? '' : result.proves}
                    </p>
                    
                    </div>

                </div>

                <div className="recomendation__rating">

                    <p className="recomendation__rating_textR">Рейтинг</p>



                    <div className="recomendation__rating_st">

                    <img src="/img/Star.png" alt="" />

                   
                    <p className="recomendation__rating_st_textF">5.0</p>
                    </div>

                </div>
            </div>

            <div className="recomendation__recs">

                <p className="recomendation__recs_title">
                    Рекомендации
                </p>

                <div className="recomendation__recs_review" id="green">

                    <p className="recomendation__box_avatarAnd_pshki_bold"> 
                        Компания: Сбербанк
                    </p>

                    <p className="recomendation__recs_review_worker" id="greenT">
                        Супер хороший сотрудник!
                    </p>

                    <p className="recomendation__recs_review_textReview"> 
                        Иван отличный сотрудник, всегда выполнял свою работу<br /> качественно и во время , никогда не опаздывал.<br /> Очень хороший специалист!
                    </p>

                    <div className="recomendation__recs_review_stars">
                        <img src="/img/Star.png" alt="" />
                        <img src="/img/Star.png" alt="" />
                        <img src="/img/Star.png" alt="" />
                        <img src="/img/Star.png" alt="" />
                        <img src="/img/Star.png" alt="" />
                    </div>
                </div>

                <div className="recomendation__recs_review" id="red">

                    <p className="recomendation__box_avatarAnd_pshki_bold"> 
                        Компания: Сбербанк
                    </p>

                    <p className="recomendation__recs_review_worker" id="redT">
                        Плохой сотрудник!
                    </p>

                    <p className="recomendation__recs_review_textReview">
                        Иван всегда опаздывал на работу, все его проекты была сданы<br /> с просрочкой и нанесли компании убытки, подумайте прежде<br /> чем взять его к себе на работу
                    </p>

                    <div className="recomendation__recs_review_stars">
                        <img src="/img/Star.png" alt="" />
                        <img src="/img/NoStar.png" alt="" />
                        <img src="/img/NoStar.png" alt="" />
                        <img src="/img/NoStar.png" alt="" />
                        <img src="/img/NoStar.png" alt="" />
                    </div>
                </div>

                <div className="recomendation__recs_review" id="gray">

                    <p className="recomendation__box_avatarAnd_pshki_bold">
                        Компания: Сбербанк
                    </p>

                    <p className="recomendation__recs_review_worker">
                        Средний сотрудник!
                    </p>

                    <p className="recomendation__recs_review_textReview">
                        Иван отличный сотрудник, всегда выполнял свою работу<br /> качественно и во время , никогда не опаздывал.<br /> Очень хороший специалист!
                    </p>

                    <div className="recomendation__recs_review_stars">
                        <img src="/img/Star.png" alt="" />
                        <img src="/img/Star.png" alt="" />
                        <img src="/img/HalfStar.png" alt="" />
                        <img src="/img/NoStar.png" alt="" />
                        <img src="/img/NoStar.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

    </div>

</section>

</>

        
    )
}