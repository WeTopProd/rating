import '../auth/Reg.scss'
import h from '../components/header/header.module.scss'

import { Link} from 'react-router-dom';


function RegAuth () {
    
    
    // const navigete = useLocation()
    
    // const location = useLocation()

    // const fromPage = location.state?.from?.pathname || '/'

    
    
    return (
        
        <section className="section__form">

            <div className={h.container}>

        <div className="form">

            <p className="form__title">Регистрация</p>


            <form className="info">


            <div className="info__item">

            <input type="text" className="form__input" placeholder="Фамилия" />

            <input type="text" className="form__input" placeholder="Имя"/>

            <input type="number" className="form__input" placeholder="Телефон"/>

            </div>


            <div class="info__item">
            
            <input type="email" className="form__input" placeholder="Почта"/>

            <input type="password" className="form__input" placeholder="Пароль"/>

            <input type="password" className="form__input" placeholder="Повторите пароль"/>

            </div>
            
            </form>


            <div className="form__footer">

                <p className="form__footer_link">Есть аккаунт?</p>

                <Link to='/login' className="form__footer_link2" >Войдите! </Link>

            </div>

            <input type="submit" value='Зарегистрироваться' className="form__link"/>

            <Link to='/' className="form__footer_exit">Назад</Link>

        </div>

            </div>

            
        

</section>




    )
}

export default RegAuth