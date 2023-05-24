import './myvakan.scss'

import useModal from "../Myrezume/useModal";
import Modal from './Modal'
import { Link, useLocation, useNavigate } from 'react-router-dom'
;
import FooterCard from './FooterCard';
import { useState } from 'react';

export default function Mycard ({

    vakan,
    otSena,
    doSena,
    opetrabot,
    proves,
    provesTwo,
    provesThree,
    zynytost,
    pros,
    logo,
    glaz,
    izmen,
    deletet,
    onClick,
    CardIdTwo

}) {

    const [isShowingModal, toggleModal] = useModal();

    const [heart, setHeart] = useState(false)
    
    const footerCard = useLocation();

    const heartLove = useLocation();

    const history = useNavigate();



    


    return (

        <>

      <Modal show={isShowingModal} onCloseButtonClick={toggleModal} />

        
        

        <div className="VAC" id={CardIdTwo}  onClick={ (event) => onClick(event.currentTarget.id)}>
            <div className="VAC__out"  >

                <div className="VAC__out_in">

                    {heartLove.pathname === '/poiksvakan' ?

                    <div>

<svg  onClick={() => setHeart(!heart)} fill={heart ? '#ce1616' : '000'} className='svg' width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"/></svg>

                    </div>

                     :
                     
                     ''
                    
                }
                    

                    <Link to='/vakanuser'  className="VAC__out_in_title">
                        {vakan}
                    </Link>

                    <div className="VAC__out_in_two">
                         
                    <div className="VAC__out_in_two_sal">

                        <p className="VAC__out_in_two_sal_text">
                            от {otSena} - {doSena} руб
                        </p>

                        <p className="VAC__out_in_two_sal_exp">
                            опыт работы
                        </p>

                        <p className="VAC__out_in_two_sal_text">
                            {opetrabot}
                        </p>
                    </div>

                    <div className="VAC__out_in_two_sing">

                        <p className="VAC__out_in_two_sal_text">
                            Вакансии: {proves} <span id="yellow"> {provesTwo}</span>  {provesThree}
                        </p>

                        <p className="VAC__out_in_two_sal_text">
                              {zynytost}
                        </p>

                    </div>
                    </div>


                    <img className='VAC__out_in_logo' src={logo} alt=""/>

                    

                </div>

                {footerCard.pathname !== '/poiksvakan' ?

                <FooterCard glaz={glaz} pros={pros} izmen={izmen} deletet={deletet} toggleModal={toggleModal}  />
                
                : '' }





            </div>

        </div>

        

        
        </>



    )
}