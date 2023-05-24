import { Link } from "react-router-dom";
import './myvakan.scss'
 

export default function FooterCard ({glaz, pros, izmen, deletet,toggleModal}) {
    return (

        <>
        
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

        </>

    )
}