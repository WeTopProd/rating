import React from "react"
import InputMask from "react-input-mask";
import { useState } from "react";
import {   useNavigate } from "react-router-dom";

import o from '../Oplata/OplataRezume.module.scss'
import Header from '../components/header/Header'
import h from '../components/header/header.module.scss'

import card from '../components/img/card_hr.svg'
import p from '../components/img/card_p.svg'



function OplataRezume ({price}) {

    const [CardNum, setCardNum] = useState('');

    const [CardName, setCardName] = useState('');

    const [CardGod, setCardGod] = useState('');

    const [CardKod, setCardKod] = useState('');

    // const [path, setPath] = useState('')

    const navigate = useNavigate()
    console.log(navigate)


    


    const handleClick = e => {

        

        e.preventDefault();

        if (
        
        (CardNum.split('').filter(item => +item).length === 16) && 

        (CardGod.split('').filter(item => +item).length === 4)&& 

        (CardKod.split('').filter(item => +item).length === 3) ) {

          return navigate('/success')

        } else {

          return  navigate('/oplatarezume')

        }
    };


    return (

        <>

        <Header
        
        link='rezume/#rezume'
        title='Резюме'
        
        link2='rezume/#poisk' 
        title2='Поиск'
        
        link3='rezume/#reyting' 
        title3='Рейтинг'
        
        link4='rezume/#abu' 
        title4='Обучение'
        
        link5='rezume/#port' 
        title5='Партнеры'

        myRezume = 'Мои резюме'
        myRezume_link = '/fd'
        
        tarif_link= '/tarifrezume'
        
        myLiveVakan = '/myLiveVakan'
        
        />
        
        <div className={o.section__oplata}>
            <div className={h.container}>
                
                <p className={o.oplata__title}>
                    Оплата
                </p>

                <div className={o.oplata}>

                    <div className={o.oplata__item}>

                        <p className={o.oplata__item_title}>Заказ: 454</p>

                        <div className={o.oplata__item_info}>
                            <p className={o.oplata__item_info_title}>Тариф</p>
                            <p className={o.oplata__item_info_title}>{price} руб</p>
                        </div>


                    </div>

                    <div className={o.oplata__item}>

                        <div className={o.oplata__item_card}>
                            
                            <div className={o.oplata__item_card_header}>
                                <img src={card} alt="svg" />
                                <img src={p} alt="svg" />
                            </div>

                            <div className={o.oplata__item_card_content}>
                                <p className={o.oplata__item_card_content_text}>Номер карты</p>
                                <p className={o.oplata__item_card_content_num}>{CardNum}</p>
                            </div>

                            <div className={o.oplata__item_card_footer}>
                                
                                <div className={o.oplata__item_card_footer_item}>
                                    <p className={o.oplata__item_card_footer_item_text}>Имя держателя карты</p>
                                    <p className={o.oplata__item_card_footer_item_name}>{CardName}</p>
                                </div>

                                <div className={o.oplata__item_card_footer_item}>
                                    <p className={o.oplata__item_card_footer_item_text}>Срок годности</p>
                                    <p className={o.oplata__item_card_footer_item_name}>{CardGod}</p>
                                </div>

                                <div className={o.oplata__item_card_footer_item}>
                                    <p className={o.oplata__item_card_footer_item_text}>cvc код</p>
                                    <p className={o.oplata__item_card_footer_item_name}>{CardKod}</p>
                                </div>

                            </div>

                        </div>

                        <form action="" className={o.oplata__item_form}>

                            <input type="text" placeholder='Имя владельца карты' className={o.oplata__item_form_input} onChange={event => setCardName(event.target.value)}  />


                            <InputMask mask="9999/9999/9999/9999" type="text" placeholder='Номер карты' className={o.oplata__item_form_input} onChange={event => setCardNum(event.target.value)}  />
                            
                            <div className={o.oplata__item_form_flex}>

                                <InputMask  mask="99/99" type="text" placeholder='срок действия' className={o.oplata__item_form_flex_input} onChange={event => setCardGod(event.target.value)}  />

                                <InputMask mask="999" type="text" placeholder='cvc код' onChange={event => setCardKod(event.target.value)} className={o.oplata__item_form_flex_input}  />

                            </div>
                            
                        </form>
                        
                    </div>

                </div>
                
                <button onClick={handleClick}  className={o.oplata__button}> Оплатить </button>

            </div>
        </div>
        </>


    )
}

export default OplataRezume