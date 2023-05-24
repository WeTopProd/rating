

import { Link, useLocation } from 'react-router-dom'
import '../Myrezume/Myrezume.scss'

import useModal from "./useModal";
import Modal from './Modal'
import { useState } from 'react';






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

    const location = useLocation ()

    const heartLove = useLocation();

    const [heart, setHeart] = useState(false)


    return(

       <>

   <Modal show={isShowingModal} onCloseButtonClick={toggleModal} />


    <div id={CardId} className="mini__outer" onClick={ (event) => onClick(event.currentTarget.id) } >
        
        
        <div className="mini__outer_inside">

             
                    {heartLove.pathname === '/poiksrezume' || '/myliverezume' ?

                    <div>

<svg  onClick={() => setHeart(!heart)} fill={heart ? '#ce1616' : '000'} className='svg' width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"/></svg>

                    </div>

                     :
                     
                     ''
                    
                }  

    <Link to='/rezumeuser' className="mini__outer_inside_blueTitle">
        {proves}
    </Link>

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


        </div>

        {location.pathname === '/poiksrezume' || location.pathname === '/myliverezume' ? 
        
        ''
        
        :

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
       

        }


    </div>

       </>

    )
}