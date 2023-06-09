import { useEffect, useState } from 'react';
import Header from '../../components/header/Header'

import './userVakan.scss' 
import { Link, useParams } from 'react-router-dom';

export default function UserVakan ({auth, setAuth, uservaka, ...myVakanId}) {

    const params = useParams()
    const userVakanId = myVakanId.myVakanId.findIndex(user => user.id === +params.userVakanId)
    const mas = myVakanId.myVakanId[userVakanId]

    console.log(mas);

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

 {mas && 
 

  <section className="section__bigTheater">
     <div className="container">
         <div className="bigTheater">
             <div className="bigTheater__top">
                 <p className="bigTheater__top_title">
                 
                 {mas.company_name}

                 <br />


                 <Link to={`/otzivuservakan/${mas.id}`} className='' >Отзывы сотрудников</Link>
 
                 </p>
                 <img className="bigTheater__top_pic" src={mas.logo}  alt="" />
             </div>
 
 
             <div className="bigTheater__exp">
                 <div className="bigTheater__exp_two">
 
                     <p className="bigTheater__top_title">
                        {mas.job_title}
                     </p>
 
                     <p className="bigTheater__top_title">
                         От {mas.start_salary} - {mas.final_salary} на руки
                     </p>
                 </div>
                 
                 <div className="bigTheater__exp_grid6">
 
 
                 <p className="bigTheater__exp_grid6_bold">
                     Тип занятости:
                 </p>

                 <p className="bigTheater__exp_grid6_gray">{mas.employment_type}</p>
 
                 <p className="bigTheater__exp_grid6_bold">
                     График работы:
                 </p>
                 <p className="bigTheater__exp_grid6_gray">{mas.schedule}</p>
                 </div>
 
                 <div className="bigTheater__exp_near">
                     <p className="bigTheater__exp_near_wk">Опыт работы</p>
                     <p className="bigTheater__exp_near_gr"> от {mas.start_experience} - {mas.final_experience} года</p>
                 </div>  
 
             </div>
 
 
             <div className="bigTheater__opi">
 
                 <p className="bigTheater__opi_txt">О компании</p>
 
                 <ul className="bigTheater__opi_ul">
 
                     <p className="bigTheater__opi_li">
                     {mas.about_company}
                     </p>
 
                 </ul>
                 
             </div>
 
             <div className="bigTheater__opi">
 
                 <p className="bigTheater__opi_txt">Требования</p>
 
                 <ul className="bigTheater__opi_ul">
 
                     <p className="bigTheater__opi_li">
                     {mas.requirements}
                     </p>
 
                 </ul>
                 
             </div>
 
             <div className="bigTheater__opi">
 
                 <p className="bigTheater__opi_txt">Условия Работы</p>
 
                 <ul className="bigTheater__opi_ul">
 
                     <p className="bigTheater__opi_li">
                     {mas.conditions}
                     </p>
 
                 </ul>
                 
             </div>
 
 {uservaka ?

 <button className='button'>Отклик</button>

 :

 ""

 }
     
 
 
         </div>
     </div>
 
 </section> 
 
 }





</>

    )
}