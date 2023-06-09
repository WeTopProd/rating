import { Link } from "react-router-dom";
import './myvakan.scss'
 

export default function FooterCard ({izmen, deletet,toggleModal, deletePostVakan, currentId, ...info}) {
    return (

        <>
        
        <div className="VAC__out_botline">

{/* <div className="VAC__out_botline_eyeDiv">

         <img className="mini__outer_botline_eyeDiv_eye" src={glaz} alt="" />

    <p className="VAC__out_botline_eyeDiv_245">
        {pros}
    </p>

</div> */}

<div className="VAC__out_botline_change">

<div className="VAC__out_botline_change_pics">

    <p  className="VAC__out_botline_change_pics_blue">
        Скрыть вакансию
    </p>

</div>

    <div className="VAC__out_botline_change_pics">

    <img className="mini__outer_botline_change_pics_other" src={izmen} alt="" />

        <Link to={`/leadvakan/${info.id}`} id={info.id}  className="VAC__out_botline_change_pics_blue">
            Изменить
        </Link>

    </div>

    <div className="VAC__out_botline_change_pics">

    <img className="mini__outer_botline_change_pics_other" src={deletet} alt="" />

        <div id={info.id}  onClick={((event) => deletePostVakan(event.currentTarget.id))} className="VAC__out_botline_change_pics_delete">
            Удалить
        </div>

    </div>
</div>



</div>

        </>

    )
}