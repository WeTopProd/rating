
import o from './Oplata.module.scss'
import h from '../components/header/header.module.scss'
import Header from '../components/header/Header'


export default function returnInfo () {
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
    
        />
        
        <section className={o.section__oplata}>
            <div className={h.container}>
                
                <p className={o.oplata__title}>
                    Возврат
                </p>

                <div className={o.oplata}>
                    
            <div className={o.oplata__item}>

                <p className={o.oplata__subtitle}>
                Возврат услуги 
                </p>

                <p className={o.oplata__text}>
                1. На странице сайта справо сверху нажмите на кнопку «Обратный звонок».
                </p> 

                <p className={o.oplata__text}>
                2. В открывающемся окне опишите свою проблему службе поддержки и, если необходимо, прикрепите файл.
                </p> 

                <p className={o.oplata__text}>
                3. Нажмите кнопку «Отправить» и втечении дня с вами свяжется оператор.  
                </p>


            </div>

                </div>

            </div>
        </section>
        
        </>
        

    )

}