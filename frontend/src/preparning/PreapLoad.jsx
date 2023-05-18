import { Link } from 'react-router-dom'
import Header from '../components/header/Header'

import h from '../components/header/header.module.scss'
import l from '../preparning/preap.module.scss'
import { useContext } from 'react'
import { myContext } from '../Context'



 export default function PreapLoad () {


    const [

        FullName, setFullName,
        data , setData,
        city , setCity,
        address , setAddress,
        education , setEducation,
        AddEducation , setAddEducation,
        placeWork , setPlaceWork,
        postwork , setPostwork,
        DataStart , setDataStart,
        DataEnd , setDataEnd,
        About , setAbout,
        skills , setSkills,
        startSalary , setStartSalary,
        endSalary , setEndSalary,
    
    ] = useContext(myContext)


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
                    
                    <form onSubmit={(event) => event.preventDefault()} className={l.preap__form}>
                        
                        <input value={FullName} onChange={(event) => setFullName(event.target.value)} type="text" placeholder='Ф.И.О' className={l.preap__form_input} />

                        <input value={data} type="text" onChange={(event) => setData(event.target.value)} placeholder='Ваш возраст' className={l.preap__form_input} />


                        <div  className={l.preap__form_flex}>
                            
                        <input value={city} onChange={(event) => setCity(event.target.value)} type="text" placeholder='Город' className={l.preap__form_flex_arr} />

                        <input value={address} onChange={(event) => setAddress(event.target.value)} type="text" placeholder='Адрес проживания' className={l.preap__form_flex_arr} />
                            
                        </div>

                        <div className={l.preap__form_flex}>
                            
                        <input value={education} onChange={(event) => setEducation(event.target.value)} type="text"  placeholder='Образование' className={l.preap__form_flex_arr} />

                        <input value={AddEducation} onChange={(event) => setAddEducation(event.target.value)}  type="text" placeholder='Доп. oбразование' className={l.preap__form_flex_arr} />
                            
                        </div>

                        <div className={l.preap__form_flex}>
                            
                            <input value={placeWork} onChange={(event) => setPlaceWork(event.target.value)}  type="text" placeholder='Прошлое место работы' className={l.preap__form_flex_arr} />
    
                            <input value={postwork} onChange={(event) => setPostwork(event.target.value)} type="text" placeholder='Должность' className={l.preap__form_flex_arr} />
                                
                        </div>

                        <div className={l.preap__form_flex}>
                            
                            <input value={DataStart} onChange={(event) => setDataStart(event.target.value)} type="text" placeholder='Дата начало рабты' className={l.preap__form_flex_arr} />
    
                            <input value={DataEnd} onChange={(event) => setDataEnd(event.target.value)} type="text" placeholder='Дата окончания работы' className={l.preap__form_flex_arr} />
                                
                        </div>

                        <textarea value={About} onChange={(event) => setAbout(event.target.value)} className={l.preap__form_textarea} placeholder='Расскажите о себе'></textarea>

                        <textarea value={skills} onChange={(event) => setSkills(event.target.value)} className={l.preap__form_textarea} placeholder='Ключевые навыки'></textarea>


                        <div className={l.preap__form_footer}>
                            
                            <p className={l.preap__form_footer_text}>Желаемая зарплата</p>

                            <input value={startSalary} onChange={(event) => setStartSalary(event.target.value)} type="text" placeholder='от' className={l.preap__form_footer_input} />

                            <input value={endSalary} onChange={(event) => setEndSalary(event.target.value)} type="text" placeholder='до' className={l.preap__form_footer_input} />

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

                <Link to='/successtwo'  className={l.preap__button}>Разместить</Link>
                               

            </div>
        </div>

        </>

    )
}