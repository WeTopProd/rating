import { useState } from 'react';


import f from '../auth/Reg.module.scss'
import h from '../components/header/header.module.scss'

import { Link} from 'react-router-dom';


function RegAuth () {
    
    const [ValueFerst, setValueFerst] = useState('');

    const [ValueLast, setValueLast] = useState(''); 

    const [ValuePocht, setValuePocht] = useState('');

    const [ValuePassw, setValuePassw] = useState(''); 

    const [ValuePasswEnd, setValuePasswEnd] = useState(''); 
    
    const [ValueTel, setValueTel] = useState('');   

    console.log(ValuePocht)
    


    
    
    return (
        
        <section className={f.section__form}>

            <div className={h.container}>

        <div className={f.form}>

            <p className={f.form__title}>Регистрация</p>


            <form className={f.info}>


            <div className={f.info__item}>

            <input type="text" className={f.form__input} placeholder="Фамилия" 
            value={ValueFerst} onChange={event => setValueFerst(event.target.value)}
            />

            <input type="text" className={f.form__input}  placeholder="Имя"
            value={ValueLast} onChange={event => setValueLast(event.target.value)}
            />

            <input type="number" className={f.form__input}  placeholder="Телефон"
            value={ValueTel} onChange={event => setValueTel(event.target.value)}
            />

            </div>


            <div class={f.info__item}>
            
            <input type="email" className={f.form__input} placeholder="Почта"
            value={ValuePocht} onChange={event => setValuePocht(event.target.value)}
            />

            <input type="password" className={f.form__input} placeholder="Пароль"
            value={ValuePassw} onChange={event => setValuePassw(event.target.value)}
            />

            <input type="password" className={f.form__input} placeholder="Повторите пароль"
            value={ValuePasswEnd} onChange={event => setValuePasswEnd(event.target.value)}
            />

            </div>
            
            </form>


            <div className={f.form__footer}>

                <p className={f.form__footer_link}>Есть аккаунт?</p>

                <Link to='/login' className={f.form__footer_link2} >Войдите! </Link>

            </div>

            <input type="submit" value='Зарегистрироваться' className={f.form__link}/>

            <Link to='/' className={f.form__footer_exit}>Назад</Link>

            </div>

        </div>  

</section>




    )
}

export default RegAuth