import './myvakan.scss'

import useModal from "../Myrezume/useModal";
import Modal from './Modal'
import { Link, useLocation, useNavigate } from 'react-router-dom'
;
import FooterCard from './FooterCard';
import { useState } from 'react';

import deletet from '../components/img/delete.svg'
import izmen from '../components/img/izmen.svg'

export default function Mycard ({deletePostVakan ,...info}) {

    const [isShowingModal, toggleModal] = useModal();

    const [heart, setHeart] = useState(false)
    
    const footerCard = useLocation();

    const heartLove = useLocation();

    const history = useNavigate();

    const [currentId, setCurrentId] = useState('')


    console.log(info.id);

    return (

        <>

      <Modal show={isShowingModal} onCloseButtonClick={toggleModal} />

        
        

        <div className="VAC"  >
            <div className="VAC__out"  >

                <div className="VAC__out_in">

                    {heartLove.pathname === '/poiksvakan' || footerCard.pathname === '/myLiveVakan' ?

                    <div>

<svg  onClick={() => setHeart(!heart)} fill={heart ? '#ce1616' : '000'} className='svg' width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"/></svg>

                    </div>

                     :
                     
                     ''
                    
                }
                    

                    <Link to={`/vakanuser/${info.id}`}  className="VAC__out_in_title">
                      {info.job_title}
                    </Link>

                    <p className='VAC__out_in_two_sal_text'>Компания: {info.company_name}</p>

                    <div className="VAC__out_in_two">
                         
                    <div className="VAC__out_in_two_sal">

                        <p className="VAC__out_in_two_sal_text">
                            от {info.start_salary} - {info.final_salary} руб
                        </p>

                        <p className="VAC__out_in_two_sal_exp">
                            опыт работы
                        </p>

                        <p className="VAC__out_in_two_sal_text">
                            от {info.start_experience} до {info.final_experience} года
                        </p>
                    </div>

                    <div className="VAC__out_in_two_sing">

                        <p className="VAC__out_in_two_sal_text">
                            Вакансии: {info.job_title}
                        </p>

                        <p className="VAC__out_in_two_sal_text">
                            Занятость: {info.employment_type}
                        </p>

                    </div>
                    </div>


                    <img className='VAC__out_in_logo' src={info.logo} alt=""/>

                    

                </div>

                {footerCard.pathname === '/poiksvakan' || footerCard.pathname === '/myLiveVakan'   ?

              ''     
              
                :
                            
            <FooterCard izmen={izmen} {...info}  deletet={deletet} deletePostVakan={deletePostVakan} currentId={currentId} toggleModal={toggleModal}  />
                
                }





            </div>

        </div>

        

        
        </>



    )
}


