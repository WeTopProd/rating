import { useEffect, useState } from 'react';
import Header from '../../components/header/Header'

import './userVakan.scss' 
import { Link } from 'react-router-dom';

export default function UserVakan (cardMassivTwo) {

    const [mas, setMas] = useState(cardMassivTwo.cardMassivTwo)
    const [result, setResult] = useState(null)

    
    

    // setMas(cardMassiv)

    useEffect(() => {
        if(mas) {
            setResult(mas[0]) 
        }
    }, [mas])


    // console.log(mas[0].zp);

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

myRezume = 'Мои вакасии'
myRezume_link = '/fefe'

tarif_link= '/tarifvakan'


 />


<section className="section__bigTheater">
    <div className="container">
        <div className="bigTheater">
            <div className="bigTheater__top">
                <p className="bigTheater__top_title">
                
                {result === null ? '' : result.NameKopmany}

                </p>
                <img className="bigTheater__top_pic" src={result === null ? '' : result.logo}  alt="" />
            </div>


            <div className="bigTheater__exp">
                <div className="bigTheater__exp_two">

                    <p className="bigTheater__top_title">
                         {result === null ? '' : result.vakan}
                    </p>

                    <p className="bigTheater__top_title">
                        От {result === null ? '' : result.otSena} - {result === null ? '' : result.doSena} на руки
                    </p>
                </div>
                
                <div className="bigTheater__exp_grid6">


                <p className="bigTheater__exp_grid6_bold">
                    Тип занятости:
                </p>
                <p className="bigTheater__exp_grid6_gray">{result === null ? '' : result.zynytost}</p>

                <p className="bigTheater__exp_grid6_bold">
                    График работы:
                </p>
                <p className="bigTheater__exp_grid6_gray">{result === null ? '' : result.Grafic}</p>
                </div>

                <div className="bigTheater__exp_near">
                    <p className="bigTheater__exp_near_wk">Опыт работы</p>
                    <p className="bigTheater__exp_near_gr">{result === null ? '' : result.opetrabot}</p>
                </div>  

            </div>


            <div className="bigTheater__opi">

                <p className="bigTheater__opi_txt">О компании</p>

                <ul className="bigTheater__opi_ul">

                    <p className="bigTheater__opi_li">
                    {result === null ? '' : result.AboutCompany}
                    </p>

                </ul>
                
            </div>

            <div className="bigTheater__opi">

                <p className="bigTheater__opi_txt">Требования</p>

                <ul className="bigTheater__opi_ul">

                    <p className="bigTheater__opi_li">
                    {result === null ? '' : result.Trebovanie}
                    </p>

                </ul>
                
            </div>

            <div className="bigTheater__opi">

                <p className="bigTheater__opi_txt">Условия Работы</p>

                <ul className="bigTheater__opi_ul">

                    <p className="bigTheater__opi_li">
                    {result === null ? '' : result.Uslovie}
                    </p>

                </ul>
                
            </div>

            <Link to='/' className="bigTheater__link">
                Получить доступ
            </Link>
        </div>
    </div>

</section>



</>

    )
}