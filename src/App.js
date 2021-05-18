import React, { useState } from 'react';
import './App.css';
import logo from '../src/images/logo.svg';
import parking from '../src/images/parking.png';
import downArrow from '../src/images/down-arrow.svg';
import skills1 from '../src/images/skills-1.svg';
import skills2 from '../src/images/skills-2.svg';
import skills3 from '../src/images/skills-3.svg';
import appStore from '../src/images/app-store.svg';
import playGoogle from '../src/images/google-play.svg';
import burger from '../src/images/burger.svg';
import close from '../src/images/close.svg';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import $ from 'jquery';
import '../src/sass/MainStyle.scss';


$('.burger').on('click', function(){
  $('.menu').addClass('show');
});

function App() {
  const [value, setValue] = useState();

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <a href="/">
                <img src={logo} alt={"logo"}/> 
                <div className="header__logo--text">
                  Mos<span>Free</span>Parking
                  <small>- бесплатные парковки Москвы</small>
                </div>
              </a>
            </div>
            <div className="burger">
              <img src={burger} alt={"burger"}/> 
            </div>
            <div className="header__menu">
              <div className="menu">
                <div className="close">
                  <img src={close} alt={"close"}/> 
                </div>
                <a href="#">О проекте</a>
                <a href="#">Контакты</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="offer">
        <div className="offer__bg">
          <img src={parking} alt={"parking"}/> 
        </div>
        <div className="container">
          <div className="offer__content">
            <div className="offer__search">
              <form className="form">
                <div className="form__label">
                  Введите адрес поиска бесплатных парковочных мест
                </div>
                <div className="search__info">
                  <AddressSuggestions token="8cc77314f3d57e88fb4fe525344ff8a5e440187f" value={value} onChange={setValue} />
                  <Button>Найти</Button>
                </div>
                <div className="form__small">
                  <p>Всего в базе: парковочных решений - 2109, парковочных мест - 2281. </p>
                  <p>Сегодня добавлено: парковочных решений - 19, парковочных мест - 20.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="offer__bottom">
          <a href="#about">
            <img src={downArrow} alt={"down-arrow"}/>
            О проекте
          </a>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about__content">
            <div className="title">
              О проекте
            </div>
            <div className="about__text">
              <p>
                Платное парковочное пространство в Москве ежегодно расширяется и дорожает. В центре Москвы практически не осталось городских парковок дешевле, чем 380 руб. в час.
              </p>
              <p>
                Однако команда MosFreeParking знает места в Москве, в том числе и в центре, где все еще можно бесплатно, и при этом безопасно и законно припарковать свой автомобиль без риска получить штраф или быть эвакуированным.
              </p>
              <p>
                Мы готовы поделиться с нашими пользователями этой информацией за относительно небольшую плату, особенно если её сравнивать с тарифами на городскую парковку.
              </p>
              <p>
                Например, в выходной день вы захотели поехать на прогулку в парк «Эрмитаж», и у вас обязательно встанет вопрос, где припарковать свой автомобиль. Городское парковочное пространство предложить вам тариф за 380 руб. в час. Но если вы зайдете в MosFreeParking и введете адрес парка «Эрмитаж», то вы узнаете, что в этой локации можно припарковать свой автомобиль бесплатно, т. е. не платить городу ничего.
              </p>
              <p>
                Будем честными и открыто скажем, что припарковать свой автомобиль полностью бесплатно не получится. Cервис MosFreeParking создан на коммерческой основе и мы готовы предоставлять вам информацию о бесплатных парковочных местах в соответствии с выбранным вами тарифом, который является вознаграждением сервиса за предоставление информационной услуги.
              </p>
              <p>
                Итак, приехав на прогулку в парк «Эрмитаж» на 2 часа, вы потратите на городскую парковку 760 руб. (если еще сможете найти свободное место), а сервис MosFreeParking за 75 руб. предоставит вам информацию о бесплатных местах неподалеку от нужной локации. При этом мы не можем вам гарантировать (также как и городская парковка), что вы обязательно припаркуетесь, поэтому вы всегда сможете обратиться в службу поддержки и сообщить, что не смогли припарковаться, и мы вернем деньги на пользовательский счет.
              </p>
              <p>
                Наша цель — собрать максимально емкую, актуальную и достоверную информацию о всех местах в Москве, где можно парковаться бесплатно, и дать автомобилистам скромную альтернативу платным парковкам Москвы.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="working">
        <div className="container">
          <div className="title">
            Как это работает
          </div>
          <div className="working__list">
            <div className="working__item">
              <img src={skills1} alt={"skills1"}/> 
              <div className="working__item--title">
                Введите адрес
              </div>
              <div className="working__item--text">
                Необходимо ввести нужный адрес, что бы найти ближайшие свободные парковки
              </div>
            </div>
            <div className="working__item">
              <img src={skills2} alt={"skills2"}/> 
              <div className="working__item--title">
                Оплатите подписку
              </div>
              <div className="working__item--text">
                Выберете один из 3х вариантов подписки и оплатите ее.
              </div>
            </div>
            <div className="working__item">
              <img src={skills3} alt={"skills3"}/> 
              <div className="working__item--title">
                Выберете парковку
              </div>
              <div className="working__item--text">
                После оплаты подписки Вы получаете список парковок
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feedback">
        <div className="container">
          <div className="title">
            Обратная связь
          </div>
          <div className="feedback__form">
            <form action="#" method="POST" className="form">
              <div className="form__left">
                <div className="form__input">
                  <TextField id="filled-basic" label="ФИО" variant="filled" />
                </div>
                <div className="form__input">
                  <TextField id="filled-basic-2" label="E-mail" variant="filled" />
                </div>
                <div className="form__input">
                  <TextField id="filled-basic-3" label="Телефон" variant="filled" />
                </div>
              </div>
              <div className="form__right">
                <div className="form__textarea">
                <TextField
                  id="filled-textarea"
                  label="Сообщение"
                  multiline
                  variant="filled"
                />
                </div>
                <div className="form__btn">
                  <Button>Отправить сообщение</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__download">
            <div className="footer__download--text">
              Скачать приложение
            </div>
            <div className="footer__download--info">
              <a href="https://apps.apple.com/ru/app/apple-store/id375380948">
                <img src={appStore} alt={"appStore"}/> 
              </a>
              <a href="https://play.google.com/store?hl=en_US&gl=US">
                <img src={playGoogle} alt={"playGoogle"}/> 
              </a>
            </div>
          </div>
          <div className="footer__copy">
            <div className="copyright">
              © 2021 Все права защищены.
            </div>
            <div className="politics">
              <a href="#">
                Политика конфиденциальности
              </a>
              <a href="#">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
