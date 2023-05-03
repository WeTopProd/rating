import Header from '../header/Header'

import h from '../header/header.module.scss'
import m from '../home/home.module.scss'

import {Link} from 'react-router-dom'


import Onas from '../onas/Onas'
import Info from '../info/Info'
import Choise from '../choise/choise'
import Swiperr from '../swiper/Swiper'
import Kval from '../kval/Kval'
import Novos from '../novos/Novos'
import Port from '../port/Port'




function Home () {

    return (

        <>

       <Header />
        
        <section className={m.section__home}>
            <div className={h.container}>
                
                <div className={m.home}>

                    <p className={m.home__title}>Кадровое агенство</p>
                    <p className={m.home__title}>РЕЙТИНГ</p>

                    <p className={m.home__subtitle}>помощь в поиске работы или сотрудника</p>

                    <div className={m.home__buttons}>
                        
                        <Link to='/rezume' className={m.home__buttons__link}>
                        Соискателям
                        </Link>

                        <Link to='/vakan' className={m.home__buttons__link}>
                        Работодателям
                        </Link>

                    </div>

                </div>

            </div>
        </section>



        <Onas />
        
        <Info />

        <Choise />

        <Swiperr />

        <Kval />

        <Novos />

        <Port />

        </>

    )

}

export default Home