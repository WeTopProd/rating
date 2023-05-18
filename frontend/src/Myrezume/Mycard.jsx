

import { Link } from 'react-router-dom'
import '../Myrezume/Myrezume.scss'

import useModal from "./useModal";
import Modal from './Modal'






export default function Mycard(

    {
        proves,
        avatar,
        years,
        zp,
        opetrabot,
        exitrabot,
        zynytost,
        grafik,
        glaz,
        prossmotreno,
        izmen,
        deletet,
        CardId,
        onClick,
 
        
    }, 

    

) {

    
    const [isShowingModal, toggleModal] = useModal();

    return(

       <>

   <Modal show={isShowingModal} onCloseButtonClick={toggleModal} />


    <div id={CardId} className="mini__outer" onClick={ (event) => onClick(event.currentTarget.id) } >
        
        <Link to='/rezumeuser' className="mini__outer_inside">

    <p className="mini__outer_inside_blueTitle">
        {proves}
    </p>

    <img className="mini__outer_inside_avatar" src={avatar} alt="" />


    <div className="mini__outer_inside_near">


        <div className="mini__outer_inside__near_age">

            <p className="mini__outer_inside_near_age_pshka">
                {years}
            </p>

            <p className="mini__outer_inside_near_age_pshka">
                {zp}
            </p>

            <p className="mini__outer_inside_near_age_pshka2">
                Опыт работы
            </p>

            <p className="mini__outer_inside_near_age_pshka">
                {opetrabot}
            </p>

            <p className="mini__outer_inside_near_age_pshka2">
                Предыдущее место работы
            </p>

            <p className="mini__outer_inside_near_age_pshka">
                {exitrabot}
            </p>

        </div>

        <div className="mini__outer_inside_near_spec">

            <p className="mini__outer_inside_near_spec_bold">
                Специализация:
            </p>

            <p className="mini__outer_inside_near_spec_bold">
                {proves}
            </p>

            <p className="mini__outer_inside_near_spec_bold">
                Занятость: {zynytost}
            </p>

            <p className="mini__outer_inside_near_spec_bold">
                График работы: {grafik}
            </p>

        </div>
    </div>


        </Link>

        <div className="mini__outer_botline">

    <div className="mini__outer_botline_eyeDiv">
        <img className="mini__outer_botline_eyeDiv_eye" src={glaz} alt="" />

        <p className="mini__outer_botline_eyeDiv_245">
            {prossmotreno}
        </p>

    </div>

    <div className="mini__outer_botline_change">
        <div className="mini__outer_botline_change_pics">

            <img className="mini__outer_botline_change_pics_other" src={izmen} alt="" />

            <Link  to='/preapload' className="mini__outer_botline_change_pics_blue">
                Изменить
            </Link>

        </div>

        <div className="mini__outer_botline_change_pics">

            <img className="mini__outer_botline_change_pics_other" src={deletet} alt="" />

            <div onClick={toggleModal} className="mini__outer_botline_change_pics_delete">
                Удалить
            </div>

        </div>
    </div>



        </div>

    </div>

       </>

    )
}