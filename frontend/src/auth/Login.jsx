import '../auth/login.scss'
import h from '../components/header/header.module.scss'

import { Link} from 'react-router-dom';


function LoginAuth () {    
    
    return (

<section className="section__form">
        <div className={h.container}>
            
            <form className="form">

                <p className="form__title">ВХОД В ЛИЧНЫЙ КАБИНЕТ</p>

                <input type="text" className="form__input" placeholder="Почта или телефон" />

                <input type="password" className="form__input" placeholder="Пароль" />

                <div className="form__footer">

                    <p className="form__footer_link">Еще нет аккаунта?</p>

                    <Link to='/reg' className="form__footer_link2">Зарегистрируйтесь!</Link>


                </div>

                <button className="form__link">Войти</button>

                <Link to='/reg' className="form__footer_exit">Назад</Link>

            </form>

        </div>
    </section>
        

    )
}

export default LoginAuth