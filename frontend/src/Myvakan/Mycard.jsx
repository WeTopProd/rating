import './myvakan.scss'

import useModal from "../Myrezume/useModal";
import Modal from './Modal'
import { Link } from 'react-router-dom';

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

    


    return (

        <>

      <Modal show={isShowingModal} onCloseButtonClick={toggleModal} />

        
        <div className='container'>

        <div className="VAC" id={CardIdTwo}  onClick={ (event) => onClick(event.currentTarget.id)}>
            <div className="VAC__out"  >

                <Link to='/vakanuser' className="VAC__out_in">
                    <p className="VAC__out_in_title">
                        {vakan}
                    </p>

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

                </Link>

                <div className="VAC__out_botline">

                    <div className="VAC__out_botline_eyeDiv">

                             <img className="mini__outer_botline_eyeDiv_eye" src={glaz} alt="" />

                        <p className="VAC__out_botline_eyeDiv_245">
                            {pros}
                        </p>

                    </div>

                    <div className="VAC__out_botline_change">
                        <div className="VAC__out_botline_change_pics">

                        <img className="mini__outer_botline_change_pics_other" src={izmen} alt="" />

                            <Link to='/leadvakan' className="VAC__out_botline_change_pics_blue">
                                Изменить
                            </Link>

                        </div>

                        <div className="VAC__out_botline_change_pics">

                        <img className="mini__outer_botline_change_pics_other" src={deletet} alt="" />

                            <div  onClick={toggleModal} className="VAC__out_botline_change_pics_delete">
                                Удалить
                            </div>

                        </div>
                    </div>



                </div>
            </div>

        </div>

        </div>

        
        </>



    )
}