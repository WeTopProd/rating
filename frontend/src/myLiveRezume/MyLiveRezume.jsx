import Header from '../components/header/Header'
import '../myLiveVakan/MyLiveVakan.scss'
import MyDataCard from '../Myrezume/my.data.card';
import Mycard from '../Myrezume/Mycard';




export default function MyLiveRezume ({onClick}) {
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




 />
        
        <section className='section__mylive'>

                <h1 className='mylive__title'>Мои избранные резюме</h1>

                <div className="mylive">

                {MyDataCard.map( (info, index) => { 
                            return <Mycard onClick={onClick} {...info}  key={index} />
                } ) }
                    
                </div>
                

        </section>

        </>
    )
}