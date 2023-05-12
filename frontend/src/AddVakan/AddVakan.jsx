
import m from '../AddVakan/addvakan.module.scss'
import Header from '../components/header/Header'
import { Link } from 'react-router-dom'

export default function AddVakan () {

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
                    Создание вакансии
                </p>

                <p className={m.sectionCreateVaccancy__outer_punkts}>
                    Заполнить все пункты отмеченные*
                </p>

                <div className={m.sectionCreateVaccancy__outer_inner}>

                    <div className={m.sectionCreateVaccancy__outer_inner_form}>

                        <div className={m.sectionCreateVaccancy__outer_inner_form_top2}>

                            <input type="text" className={m.sectionCreateVaccancy__outer_inner_form_top2_left}
                                placeholder="Название вакансии*" />

                            <input type="text" className={m.sectionCreateVaccancy__outer_inner_form_top2_left}
                                placeholder="Специальность*" />


                        </div>

                        <input type="text" className={m.sectionCreateVaccancy__outer_inner_form_CN}
                            placeholder="Название компании*" />


                        <textarea placeholder='О компании*' className={m.sectionCreateVaccancy__outer_inner_form_textArea}></textarea>

                        <textarea className={m.sectionCreateVaccancy__outer_inner_form_textArea}  placeholder="Требования*"></textarea>

                        <textarea placeholder="Условия*" className={m.sectionCreateVaccancy__outer_inner_form_textArea}></textarea>


                    </div>

                    <div className={m.sectionCreateVaccancy__outer_inner_right}>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_logo}>

                            <input type="file" />

                            <p className={m.sectionCreateVaccancy__outer_inner_right_logo_textLogo}>
                                Логотип компании*
                            </p>

                        </div>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_otDo}>

                            <p className={m.sectionCreateVaccancy__outer_inner_right_otDo_para}>
                                Размер заработной платы*
                            </p>

                            <div className={m.sectionCreateVaccancy__outer_inner_right_otDo_input}>

                                <input type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="От" />

                                <input type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="До" />

                            </div>

                        </div>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_otDo}>

                            <p className={m.sectionCreateVaccancy__outer_inner_right_otDo_para}>
                                Опыт работы*
                            </p>

                            <div className={m.sectionCreateVaccancy__outer_inner_right_otDo_input}>

                                <input type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="От" />

                                <input type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="До" />

                            </div>

                        </div>

                        <div className={m.sectionCreateVaccancy__outer_inner_right_otDo}>

                            <p className={m.sectionCreateVaccancy__outer_inner_right_otDo_para}>
                                Тип занятости*
                            </p>


                            <div className={m.sectionCreateVaccancy__outer_inner_right_otDo_input}>

                                <input type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="От" />

                                <input type="number" className={m.sectionCreateVaccancy__outer_inner_right_otDo_input_inp}
                                    placeholder="До" />

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

            <Link to='/tarifvakan' className={m.sectionCreateVaccancy__link}>Разместить</Link>
            
        </div>
    </div>

</section>

</>

    )

}
