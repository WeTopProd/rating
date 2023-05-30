import { Link } from 'react-router-dom'
import Header from '../components/header/Header'

import h from '../components/header/header.module.scss'
import l from '../preparning/preap.module.scss'
import { useContext, useState } from 'react'
import { myContext } from '../Context'
import axios from 'axios'

 export default function Preap ({auth, setAuth}) {

    const [notes, setNotes] = useState([])
    
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
        PhoneNumber, setPhoneNumber,

        foto, setFoto,
        recommendation, setRecommendation,
        certificate, setCertificate,

        secondary_edu, setsecondary_edu,
        secondary_special_edu, setsecondary_special_edu,
        incomplete_higher_edu,setincomplete_higher_edu,
        higher_edu,sethigher_edu,
        bachelor_edu,setbachelor_edu,
        master_edu,setmaster_edu,
        candidate_science_edu,setcandidate_science_edu,
        doctor_science_edu,setdoctor_science_edu,
    
    ] = useContext(myContext)

    

    // function formHandler (){
    //     let obj = {

    //         //input
    //         FullName: FullName,
    //         PhoneNumber: PhoneNumber ,
    //         data: data,
    //         city: city,
    //         address: address,
    //         education: education,
    //         AddEducation: AddEducation,

    //         placeWork: placeWork,
    //         postwork: postwork,
    //         DataStart: DataStart,
    //         DataEnd: DataEnd,
    //         About: About,
    //         skills: skills,
    //         startSalary: startSalary,
    //         endSalary: endSalary,

    //         //file
    //         foto: foto, 
    //         recommendation: recommendation,
    //         certificate: certificate,

    //     }

    //     setNotes(...notes, obj)

    // }

    const onChangePicture = e => {
        setFoto([...foto, e.target.files[0]]);
    };

    const onChangePictureTwo = e => {
        setRecommendation([...recommendation, e.target.files[0]]);
    };

    const onChangePictureThree = e => {
        setCertificate([...certificate, e.target.files[0]]);
    };

    const PreapRezume = (event) => {

        event.preventDefault();

       
    
        axios.post('http://localhost:8001/api/resume/', {

            FullName: FullName,
            PhoneNumber: PhoneNumber,
            data: data,
            city: city,
            address: address,
            education: education,
            AddEducation: AddEducation,
            placeWork: placeWork,
            postWork: postwork,
            DataStart: DataStart,
            DataEnd: DataEnd,
            About: About,
            skills: skills,
            startSalary: startSalary,
            endSalary: endSalary,
            foto: foto, 
            recommendation: recommendation,
            certificate: certificate,

            secondary_edu: secondary_edu,
            secondary_special_edu: secondary_special_edu,
            incomplete_higher_edu:incomplete_higher_edu,
            higher_edu:higher_edu,
            bachelor_edu:bachelor_edu,
            master_edu:master_edu,
            candidate_science_edu:candidate_science_edu,
            doctor_science_edu:doctor_science_edu,

        },
        
        {
            headers : {
            'Content-Type': 'application/json',
            }
            
        }
        )

        .catch(err => console.error(err))

      };



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

        myRezume_link = '/myrezume'
        
        tarif_link= '/tarifrezume'
        
        myLiveVakan = '/myLiveVakan'
        
        auth={auth}
        setAuth={setAuth}
        />

        <div className={l.section__preap}>
            <div className={h.container}>

                <p className={l.preap__title}>Составление резюме</p>
                
                <form onSubmit={PreapRezume} className={l.preap}>
                    
                    <div  className={l.preap__form}>
                        
                        <input value={FullName} onChange={(event) => setFullName(event.target.value)} type="text" placeholder='Ф.И.О' className={l.preap__form_input} />

                        <input value={PhoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} type="text" placeholder='Телефон' className={l.preap__form_input} />

                        <input value={data} type="number" onChange={(event) => setData(event.target.value)} placeholder='Ваш возраст' className={l.preap__form_input} />


                        <div  className={l.preap__form_flex}>
                            
                        <input value={city} onChange={(event) => setCity(event.target.value)} type="text" placeholder='Город' className={l.preap__form_flex_arr} />

                        <input value={address} onChange={(event) => setAddress(event.target.value)} type="text" placeholder='Адрес проживания' className={l.preap__form_flex_arr} />
                            
                        </div>


                        <div className={l.preap__form_flex}>
                            
<select className={l.preap__form_flex_select} >
    <option onChange={(event) => setEducation(event.target.value)} value={education} >Образование</option>
    <option onChange={(event) => setsecondary_edu(event.target.value)} value={secondary_edu} >Среднее</option>
    <option onChange={(event) => setsecondary_special_edu(event.target.value)} value={secondary_special_edu}>Среднее специальное</option>
    <option onChange={(event) => setincomplete_higher_edu(event.target.value)} value={incomplete_higher_edu}>Неоконченное высшее'</option>
    <option onChange={(event) => sethigher_edu(event.target.value)} value={higher_edu}>Высшее</option>
    <option onChange={(event) => setbachelor_edu(event.target.value)} value={bachelor_edu}>Бакалавр</option>
    <option onChange={(event) => setmaster_edu(event.target.value)} value={master_edu}>Магистр</option>
    <option onChange={(event) => setcandidate_science_edu(event.target.value)} value={candidate_science_edu}>Кандидат наук</option>
    <option onChange={(event) => setdoctor_science_edu(event.target.value)} value={doctor_science_edu}>Доктор наук</option>
</select>
    
<select className={l.preap__form_flex_select}>
    <option value={AddEducation} onChange={(event) => setAddEducation(event.target.value)}>Доп. oбразование</option>
    <option onChange={(event) => setsecondary_edu(event.target.value)} value={secondary_edu} >Среднее</option>
    <option onChange={(event) => setsecondary_special_edu(event.target.value)} value={secondary_special_edu}>Среднее специальное</option>
    <option onChange={(event) => setincomplete_higher_edu(event.target.value)} value={incomplete_higher_edu}>Неоконченное высшее'</option>
    <option onChange={(event) => sethigher_edu(event.target.value)} value={higher_edu}>Высшее</option>
    <option onChange={(event) => setbachelor_edu(event.target.value)} value={bachelor_edu}>Бакалавр</option>
    <option onChange={(event) => setmaster_edu(event.target.value)} value={master_edu}>Магистр</option>
    <option onChange={(event) => setcandidate_science_edu(event.target.value)} value={candidate_science_edu}>Кандидат наук</option>
    <option onChange={(event) => setdoctor_science_edu(event.target.value)} value={doctor_science_edu}>Доктор наук</option>
</select>
                                
                        </div>


                        <div className={l.preap__form_flex}>
                            
                            <input value={placeWork} onChange={(event) => setPlaceWork(event.target.value)}  type="text" placeholder='Прошлое место работы' className={l.preap__form_flex_arr} />
    
                            <input value={postwork} onChange={(event) => setPostwork(event.target.value)} type="text" placeholder='Должность' className={l.preap__form_flex_arr} />
                                
                        </div>

                        <div className={l.preap__form_flex}>
                            
                            <input value={DataStart} onChange={(event) => setDataStart(event.target.value)} type="date" placeholder='Дата начало работы' className={l.preap__form_flex_arr} />
    
                            <input value={DataEnd} onChange={(event) => setDataEnd(event.target.value)} type="date" placeholder='Дата окончания работы' className={l.preap__form_flex_arr} />
                                
                        </div>

                        <textarea value={About} onChange={(event) => setAbout(event.target.value)} className={l.preap__form_textarea} placeholder='Расскажите о себе'></textarea>

                        <textarea value={skills} onChange={(event) => setSkills(event.target.value)} className={l.preap__form_textarea} placeholder='Ключевые навыки'></textarea>


                        <div className={l.preap__form_footer}>
                            
                            <p className={l.preap__form_footer_text}>Желаемая зарплата</p>

                            <input value={startSalary} onChange={(event) => setStartSalary(event.target.value)} type="number" placeholder='от' className={l.preap__form_footer_input} />

                            <input value={endSalary} onChange={(event) => setEndSalary(event.target.value)} type="number" placeholder='до' className={l.preap__form_footer_input} />

                        </div>


                    </div>


                    <div className={l.preap__info}>
                    
        <div className={l.file__info}>
            
            <input type="file" className={l.input_file} onChange={e => onChangePicture(e)} />

            <p className={l.file__info_text}>

            ФОТО

            </p>

        </div>
        
        <div className={l.file__info}>
            
            <input type="file" className={l.input_file} onChange={e => onChangePictureTwo(e)} />

            <p className={l.file__info_text}>
            Загрузить
            Рекомендацию
            </p>

        </div>
        
        <div className={l.file__info}>
            
            <input type="file" className={l.input_file} onChange={e => onChangePictureThree(e)}/>

            <p className={l.file__info_text}>

            Загрузить
            Сертификат 

            </p>

        </div>

                    </div>

                </form>

                <button  onClick={PreapRezume} className={l.preap__button}>Разместить</button>
                               

            </div>
        </div>

        </>

    )
}