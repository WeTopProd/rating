
import { useContext, useState } from 'react'
import m from '../AddVakan/addvakan.module.scss'
import Header from '../components/header/Header'
import { Link } from 'react-router-dom'
import { contextVakan } from '../ContextVakan'

export default function LeadVakan () {

    const [notesTwo, setNotesTwo] = useState([])

    const [

        NameVakan, setNameVakan,
        Spec, setSpec,
        NameKompany, setNameKompany,
        AboutKompany, setAboutKompany,
        Requirement, setRequirement,
        conditions, setConditions,
        ZpOt, setZpOt,
        ZpDo, setZpDo,
        Experience, setExperience,
        ExperienceDo, setExperienceDo,

        Type, setType,
        Grafic, SetGrafic,
        Logo, setLogo ,
    
    ] = useContext(contextVakan)

    function formVakan (){

        let objTwo = {

            NameVakan: NameVakan  ,
            Spec: Spec  ,
            NameKompany: NameKompany  ,
            AboutKompany: AboutKompany  ,
            Requirement: Requirement  ,
            conditions: conditions  ,
            ZpOt: ZpOt  ,
            ZpDo: ZpDo  ,
            Experience: Experience  ,
            ExperienceDo: ExperienceDo  ,
            Type: Type  ,
            Grafic: Grafic ,
            Logo: Logo ,
            
        }

        setNotesTwo(...notesTwo, objTwo)

    }

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

<section className={m.sectionCreateVaccancy6}>

    <div className={m.container}>

        <div className={m.sectionCreateVaccancy}>

            <div className={m.sectionCreateVaccancy__outer}>

                <p className={m.sectionCreateVaccancy__outer_title}>
                    Изменения вакансии
                </p>

                <p className={m.sectionCreateVaccancy__outer_punkts}>
                    Заполнить все пункты отмеченные*
                </p>

                <div className={m.sectionCreateVaccancy__outer_inner}>

                    <div className={m.sectionCreateVaccancy__outer_inner_form}>

                        <div className={m.sectionCreateVaccancy__outer_inner_form_top2}>

                            <input value={NameVakan} onChange={(event) => setNameVakan(event.target.value)} type="text" className={m.sectionCreateVaccancy__outer_inner_form_top2_left}
                                placeholder="Название вакансии*" />



                        </div>

                        <input value={NameKompany} onChange={(event) => setNameKompany(event.target.value)} type="text" className={m.sectionCreateVaccancy__outer_inner_form_CN}
                            placeholder="Название компании*" />


                        <textarea value={AboutKompany} onChange={(event) => setAboutKompany(event.target.value)} placeholder='О компании*' className={m.sectionCreateVaccancy__outer_inner_form_textArea}></textarea>

                        <textarea value={Requirement} onChange={(event) => setRequirement(event.target.value)} className={m.sectionCreateVaccancy__outer_inner_form_textArea}  placeholder="Требования*"></textarea>

                        <textarea value={conditions} onChange={(event) => setConditions(event.target.value)} placeholder="Условия*" className={m.sectionCreateVaccancy__outer_inner_form_textArea}></textarea>


                    </div>

                    <div className={m.sectionCreateVaccancy__outer_inner_right}>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_logo}>

                            <input type="file" onChange={Logo}  />

                            <p className={m.sectionCreateVaccancy__outer_inner_right_logo_textLogo}>
                                Логотип компании*
                            </p>

                        </div>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_otDo}>

                            <p className={m.sectionCreateVaccancy__outer_inner_right_otDo_para}>
                                Размер заработной платы*
                            </p>

                            <div className={m.sectionCreateVaccancy__outer_inner_right_otDo_input}>

                                <input value={ZpOt} onChange={(event) => setZpOt(event.target.value)} type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="От" />

                                <input value={ZpDo} onChange={(event) => setZpDo(event.target.value)} type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="До" />

                            </div>

                        </div>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_otDo}>

                            <p className={m.sectionCreateVaccancy__outer_inner_right_otDo_para}>
                                Опыт работы*
                            </p>

                            <div className={m.sectionCreateVaccancy__outer_inner_right_otDo_input}>

                                <input value={Experience} onChange={(event) => setExperience(event.target.value)} type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="От" />

                                <input value={ExperienceDo} onChange={(event) => setExperienceDo(event.target.value)} type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="До" />

                            </div>

                        </div>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_otDo}>

                            <p className={m.sectionCreateVaccancy__outer_inner_right_otDo_para}>
                                Тип занятости*
                            </p>


                            <div className={m.sectionCreateVaccancy__outer_inner_right_otDo_input}>

                                <input value={Type} onChange={(event) => setType(event.target.value)} type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="" />

                            </div>

                        </div>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_otDo}>

<p className={m.sectionCreateVaccancy__outer_inner_right_otDo_para}>
    График Работы*
</p>


<div className={m.sectionCreateVaccancy__outer_inner_right_otDo_input}>

<input value={Grafic} onChange={(event) => SetGrafic(event.target.value)} type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
    placeholder="" />

</div>

</div>





                        <div className={m.sectionCreateVaccancy__outer_inner_right_checking}>

                            <p className={m.sectionCreateVaccancy__outer_inner_right_checking_typeZ}>
                                Тип оформления*
                            </p>

                            <label className={m.sectionCreateVaccancy__outer_inner_right_checking_kk}>

                            <p className={m.sectionCreateVaccancy__outer_inner_right_checking_kk_cont}>По трудовой</p>

                            <input type="checkbox" className={m.sectionCreateVaccancy__outer_inner_right_checking_kk_checkbox} />

                            </label>

                            <label className={m.sectionCreateVaccancy__outer_inner_right_checking_kk}>

                            <p className={m.sectionCreateVaccancy__outer_inner_right_checking_kk_cont}>По контракту
                            </p>

                            <input type="checkbox" className={m.sectionCreateVaccancy__outer_inner_right_checking_kk_checkbox} />

                            </label>
                        </div>
                    </div>
                    
                </div>
            </div>

            <Link to='/myvakan' onClick={formVakan} className={m.sectionCreateVaccancy__link}>Изменить</Link>
            
        </div>
    </div>

</section>

</>

    )

}
