

import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'

import '../../Myrezume/User/Otziv.scss'

export default function OtzivVakan ({ auth, setAuth, ...cardMassivTwo}) {

    const [mas, setMas] = useState(cardMassivTwo.cardMassivTwo)
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

        myRezume_link = '/myrezume'
        
        tarif_link= '/tarifrezume'
        
        myLiveVakan = '/myLiveVakan'
        auth={auth}
        setAuth={setAuth}
        />

<section className="sectionRecomendation">

    <div className="container">

        <div className="recomendation">

            <div className="recomendation__box">

                <div className="recomendation__box_avatarAnd">

                    <img className="recomendation__box_avatarAnd_avatar" src={result === null ? '' : result.logo} alt="" />

                    <div className="recomendation__box_avatarAnd_pshki">

                    <p className="recomendation__box_avatarAnd_pshki_bold">
                        {result === null ? '' : result.NameKopmany}  
                    </p>

                    <p className="recomendation__box_avatarAnd_pshki_text">
                    {result === null ? '' : result.years} {result === null ? '' : result.vakan}
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
                Отзывы  сотрудников
                </p>

                <div className="recomendation__recs_review" id="green">

                    <p className="recomendation__box_avatarAnd_pshki_bold"> 
                    Денис
                    </p>

                    <p className="recomendation__recs_review_worker" id="greenT">
                        Нравиться                       
                    </p>

                    <p className="recomendation__recs_review_textReview"> 
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda optio laborum fugit voluptatem quibusdam quis deserunt, adipisci, excepturi libero ex corrupti inventore debitis incidunt perspiciatis, aspernatur ad reiciendis perferendis. 
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
                    Анна
                    </p>

                    <p className="recomendation__recs_review_worker" id="redT">
                     класс 
                    </p>

                    <p className="recomendation__recs_review_textReview">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptates tenetur. Autem molestias velit repellendus aliquid soluta eius deleniti cumque necessitatibus, ab dolor dicta sequi. Perspiciatis, autem. Culpa, facilis possimus. 

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
                    Коля
                    </p>

                    <p className="recomendation__recs_review_worker">
                        Плохая компания
                    </p>

                    <p className="recomendation__recs_review_textReview">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore aliquam pariatur recusandae, aperiam nam ipsam provident dolore vitae voluptate saepe consectetur expedita harum molestiae at ea! Totam, sunt itaque?
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