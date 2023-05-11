import { Link } from 'react-router-dom'
import Header from '../components/header/Header'

import h from '../components/header/header.module.scss'
import l from '../preparning/preap.module.scss'

 export default function PreapLoad () {

    return (

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

        <div className={l.section__preap}>
            <div className={h.container}>

                <p className={l.preap__title}>Изменить резюме</p>
                
                <div className={l.preap}>
                    
                    <form className={l.preap__form}>
                        
                        <input type="text" placeholder='Ф.И.О' className={l.preap__form_input} />

                        <input type="text" placeholder='Дата рождения' className={l.preap__form_input} />


                        <div className={l.preap__form_flex}>
                            
                        <input type="text" placeholder='Город' className={l.preap__form_flex_arr} />

                        <input type="text" placeholder='Адрес проживания' className={l.preap__form_flex_arr} />
                            
                        </div>

                        <div className={l.preap__form_flex}>
                            
                        <input type="text" placeholder='Образование' className={l.preap__form_flex_arr} />

                        <input type="text" placeholder='Доп. oбразование' className={l.preap__form_flex_arr} />
                            
                        </div>

                        <div className={l.preap__form_flex}>
                            
                            <input type="text" placeholder='Прошлое место работы' className={l.preap__form_flex_arr} />
    
                            <input type="text" placeholder='Должность' className={l.preap__form_flex_arr} />
                                
                        </div>

                        <div className={l.preap__form_flex}>
                            
                            <input type="text" placeholder='Дата начало рабты' className={l.preap__form_flex_arr} />
    
                            <input type="text" placeholder='Дата окончания работы' className={l.preap__form_flex_arr} />
                                
                        </div>

                        <textarea className={l.preap__form_textarea} placeholder='Расскажите о себе'></textarea>

                        <textarea className={l.preap__form_textarea} placeholder='Ключевые навыки'></textarea>


                        <div className={l.preap__form_footer}>
                            
                            <p className={l.preap__form_footer_text}>Желаемая зарплата</p>

                            <input type="text" placeholder='от' className={l.preap__form_footer_input} />

                            <input type="text" placeholder='до' className={l.preap__form_footer_input} />

                        </div>


                    </form>


    <div className={l.preap__info}>
                    
        <div className={l.file__info}>
            
            <input type="file" className={l.input_file} />

            <p className={l.file__info_text}>

            ФОТО

            </p>

        </div>
        
        <div className={l.file__info}>
            
            <input type="file" className={l.input_file} />

            <p className={l.file__info_text}>
            Загрузить
            Рекомендацию
            </p>

        </div>
        
        <div className={l.file__info}>
            
            <input type="file" className={l.input_file} />

            <p className={l.file__info_text}>

            Загрузить
            Сертификат 

            </p>

        </div>

    </div>

                </div>

                <Link to='/successthree' className={l.preap__button}>Сохранить</Link>
                

            </div>
        </div>

        </>

    )
}