import Header from '../components/header/Header'
import '../Myrezume/Myrezume.scss'


import plus from '../components/img/+.svg'
import { Link } from 'react-router-dom'
import MyDataCard from './my.data.card'
import Mycard from './Mycard'


export default function MyVakan({onClick}) {

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