

import '../Myrezume/Myrezume.scss'

import Header from '../components/header/Header'
import Mycard from './Mycard'
import MyDataCard from './my.data.card'


import plus from '../components/img/+.svg'


export default function MyRezume() {
    return(

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

<section class="sectionmini">
 
 <div class="container">

     <div class="mini">

         <p class="mini__title">
             Мои резюме
         </p>

         {MyDataCard.map( (info, index) => { 
                    return <Mycard {...info}  key={index} />
         } ) }

         <div className='plus'>
                <img src={plus} alt="svg" />
        </div>

     </div>

 </div>

</section>

       </>

    )
}