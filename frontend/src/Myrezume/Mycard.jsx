

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
    }

) {

    const [isShowingModal, toggleModal] = useModal();


    return(

       <>

   <Modal show={isShowingModal} onCloseButtonClick={toggleModal} />


    <div class="mini__outer">

        <div class="mini__outer_inside">

    <p class="mini__outer_inside_blueTitle">
        {proves}
    </p>

    <img class="mini__outer_inside_avatar" src={avatar} alt="" />


    <div class="mini__outer_inside_near">


        <div class="mini__outer_inside__near_age">

            <p class="mini__outer_inside_near_age_pshka">
                {years}
            </p>

            <p class="mini__outer_inside_near_age_pshka">
                {zp}
            </p>

            <p class="mini__outer_inside_near_age_pshka2">
                Опыт работы
            </p>

            <p class="mini__outer_inside_near_age_pshka">
                {opetrabot}
            </p>

            <p class="mini__outer_inside_near_age_pshka2">
                Предыдущее место работы
            </p>

            <p class="mini__outer_inside_near_age_pshka">
                {exitrabot}
            </p>

        </div>

        <div class="mini__outer_inside_near_spec">

            <p class="mini__outer_inside_near_spec_bold">
                Специализация:
            </p>

            <p class="mini__outer_inside_near_spec_bold">
                {proves}
            </p>

            <p class="mini__outer_inside_near_spec_bold">
                Занятость: {zynytost}
            </p>

            <p class="mini__outer_inside_near_spec_bold">
                График работы: {grafik}
            </p>

        </div>
    </div>


        </div>

        <div class="mini__outer_botline">

    <div class="mini__outer_botline_eyeDiv">
        <img class="mini__outer_botline_eyeDiv_eye" src={glaz} alt="" />

        <p class="mini__outer_botline_eyeDiv_245">
            {prossmotreno}
        </p>

    </div>

    <div class="mini__outer_botline_change">
        <div class="mini__outer_botline_change_pics">

            <img class="mini__outer_botline_change_pics_other" src={izmen} alt="" />

            <Link  to='/preapload' class="mini__outer_botline_change_pics_blue">
                Изменить
            </Link>

        </div>

        <div class="mini__outer_botline_change_pics">

            <img class="mini__outer_botline_change_pics_other" src={deletet} alt="" />

            <div onClick={toggleModal} class="mini__outer_botline_change_pics_delete">
                Удалить
            </div>

        </div>
    </div>



        </div>

    </div>

       </>

    )
}