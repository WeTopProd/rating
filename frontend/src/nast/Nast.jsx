
import Header from '../components/header/Header';
import h from '../components/header/header.module.scss'

import '../nast/naststyle.scss'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'



function Nast () {
    return (

        <>

        <Header

        
                link2='' 
                title2='Поиск'
        
                link3='' 
                title3='Рейтинг'
        
                link4='#kval' 
                title4='Обучение'
        
                link5='#port' 
                title5='Партнеры'
        />

        <div className={h.container}>

<Tabs className='section__nast'>

    <TabList className='form__center'>

      <Tab className="form__three" >Личные данные</Tab>

      <Tab className="form__three" >Загрузить файлы</Tab>

      <Tab className="form__three" >Настройка уведомлений</Tab>

    </TabList>

    <TabPanel>

<div className="form__info">

<div className="form__info__item">

<p className="form__info__item_part">Имя:Иван</p>
<p className="form__info__item_part">Фамилия:Иван</p>
<p className="form__info__item_part">Отчество:Иванович</p>
<p className="form__info__item_part">Дата рождения:12.04.1999</p>
<p className="form__info__item_blue">Редактировать</p>
<p className="form__info__item_part">Телефон: +79546327593</p>
<p className="form__info__item_part">Пароль: ******************</p>
<p className="form__info__item_blue">Изменить пароль</p>

</div>

<div className="form__info__item">

<p className="form__info__item_part">Мои рекомендации</p>
<p className="form__info__item_blue">Рекомендация Иванова Ивана. pdf </p>
<p className="form__info__item_blue">Рекомендация Сбербанк Иванова Ивана.pdf</p>

<div className="form__info__item_switcher">
    <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
    <p className="form__info__item_switcher_resume">скрыть резюме</p>

</div> 

</div>

</div>

    </TabPanel>
    
    <TabPanel>

      <div className='section__file'>

        <div className="file__info">
            
            <input type="file" className='input_file' />

            <p className='file__info_text'>

            Загрузить
            Рекомендацию 

            </p>
        </div>

        <div className="file__info">

        <input type="file" className='input_file' />
            
            <p className='file__info_text'> 
            Загрузить
            Сертификат
            </p>
        </div>

        <div className="file__info">

            <input type="file" className='input_file' />

            <p className='file__info_text'> 
            Загрузить
            фото
            </p>

        </div>

      </div>

    </TabPanel>

    <TabPanel>

  <div class="form__notific">
                
                        <p className="form__notific__text">Уведомлять только приглашения</p>
                    
                    <label className="form__notific__div">
                        <input type="checkbox" />
                        <p className="form__notific__div_text">Отключить все уведомления</p>
                    </label>

                    <label  className="form__notific__div">
                        <input type="checkbox" />
                        <p className="form__notific__div_text">Отключить аккаунт</p>
                    </label>
  </div>

    </TabPanel>


  </Tabs>

        </div>

        
        
     
        </>


                
           

    )
}

export default Nast