import Header from '../components/header/Header'
import '../Myrezume/Myrezume.scss'


import plus from '../components/img/+.svg'
import { Link } from 'react-router-dom'

import MyDataCard from './my.data.card'
import Mycard from './Mycard'


export default function MyVakan({onClick, setAuth, auth}) {

    

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

myRezume = 'Мои вакансии'

myRezume_link = '/myvakan'

tarif_link= '/tarifvakan'

myLiveVakan = '/myliverezume'

auth={auth}
setAuth={setAuth}
 />



<section className="sectionmini">
 
 <div className="container">

     <div className="mini">

         <p className="mini__title">
             Мои вакасии
         </p>

         {MyDataCard.map( (info, index) => { 
                return <Mycard onClick={onClick} {...info}  key={index} />
         } ) }

         <Link to='/preap' className='plus'>
                <img src={plus} alt="svg" />
        </Link>

     </div>

 </div>

</section>


       </>

    )
}


