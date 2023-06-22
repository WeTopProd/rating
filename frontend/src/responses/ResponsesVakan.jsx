
import { useEffect, useState } from "react"
import Mycard from "../Myrezume/Mycard"
import Header from "../components/header/Header"
import h from "../components/header/header.module.scss"
import r from "./ResponsesVakan.module.scss"
import axios from "axios"

export default function ResponsesVakan ({ applicants}) {


    const [mycardId , setMycardId] = useState([])

    const tokenTwo = JSON.parse(localStorage.getItem('token'))


    useEffect(() => {
  
      axios.get('http://localhost:8001/api/resume/', {
      
      headers: {
          'Content-Type': 'application/json , multipart/form-data',
          'authorization': `Token ${tokenTwo}`
      }
  
      })
  
      .then((res) => {
         setMycardId(res.data)
        //  window.location.reload()
        })
      .catch((err) => console.error(err))
  
  }, [])


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

responses = 'Отклики'

responses__link = '/responsesvakan'

 />
        
        <section className={r.section__respons}>
            <div className={h.container}>
                
                <p className={r.respons__title}>
                    Отклики соискателей  на вашу вакансию
                </p>


                <div className={r.respons}>
                    
        {mycardId.map( (info, index) => { 
                return <Mycard {...info} applicants={applicants}  key={index} />
         } ) }


                </div>


            </div>
        </section>

        </>

    )
}