
import { useState } from 'react';

import h from '../components/header/header.module.scss'
import l from '../auth/login.module.scss'

import { Link} from 'react-router-dom';


function LoginAuth () {   
    
    const [ValuePocht, setValuePocht] = useState('');

    const [ValuePassw, setValuePassw] = useState(''); 
    

    

    
    return (

<section className={l.section__form}>
        <div className={h.container}>
            
            <form className={l.form}>

                <p className={l.form__title}>ВХОД В ЛИЧНЫЙ КАБИНЕТ</p>

                <input type="text" value={ValuePocht} onChange={event => setValuePocht(event.target.value)} className={l.form__input} placeholder="Почта или телефон" />

                <input type="password" value={ValuePassw} onChange={event => setValuePassw(event.target.value)} className={l.form__input} placeholder="Пароль" />

                <div className={l.form__footer}>

                    <p className={l.form__footer_link}>Еще нет аккаунта?</p>

                    <Link to='/reg' className={l.form__footer_link2}>Зарегистрируйтесь!</Link>


                </div>

                <button className={l.form__link}>Войти</button>

                <Link to='/reg' className={l.form__footer_exit}>Назад</Link>

            </form>

        </div>
    </section>
        

    )
}

export default LoginAuth