import Mycard from '../Myvakan/Mycard'
import MyDataCardTwo from '../Myvakan/my.data.card'
import Header from '../components/header/Header'
import './MyLiveVakan.scss'




export default function MyLiveVakan({onClick}) {
    return (
        <>

        <Header

        link='#onas'
        title='О нас'

        link2='#info' 
        title2='Предложения'

        link3='#kval' 
        title3='Обучение'

        link4='#novos' 
        title4='Новости и статьи '

        link5='#footer' 
        title5='Контакты'

        myRezume = 'Мои резюме'

myRezume_link = '/myrezume'

tarif_link= '/tarifrezume'

myLiveVakan = '/myLiveVakan'


         />
        
        <section className='section__mylive'>


                <h1 className='mylive__title'>Мои избранные вакансии</h1>

                <div className="mylive">

                {MyDataCardTwo.map( (info, index) => { 
                            return <Mycard onClick={onClick} {...info}  key={index} />
                } ) }
                    
                </div>
                

        </section>

        </>
    )
}