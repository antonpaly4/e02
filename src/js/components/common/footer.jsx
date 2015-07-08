var React = require('react');

module.exports = React.createClass({
  render: function(){
    return(
      <footer className="footer">
        <div className="wrapper columns">
          <div className="column column-s">
            <a href="app" className="footer-company">
              ЭЛЕКТРОЩИТ<span className="footer-company_span">УФА</span>
            </a>
            <div className="footer__content">
              ООО "Электрощит-Уфа" основано в 2008 году. Мы являемся одной из крупнейших компаний Башкирии по реализации сложных объектов внешнего м внутреннего электроснабжения.
            </div>
          </div>
          <div className="column column-s">
            <div className="footer__title">
              Меню
              <div className="footer__title-border">
                <div className="footer__title-border_orange"></div>
              </div>
            </div>
            <div className="footer__menu">
              <ul>
                <li className="footer__menu-item">
                  <a className="footer__menu-item__a" href="app">Главная</a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-item__a" href="app">Услуги</a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-item__a" href="objects">Объекты</a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-item__a" href="app">О компании</a>
                </li>
                <li className="footer__menu-item">
                  <a className="footer__menu-item__a" href="app">Контакты</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column column-s">
            <div className="footer__title">
              Связь с нами
              <div className="footer__title-border">
                <div className="footer__title-border_orange"></div>
              </div>
            </div>
            <div className="footer__content">
              <ul>
                <li className="footer__contacts-item">
                  г. Уфа, ул. Пархоменко, д. 133/1б оф. 301
                </li>
                <li className="footer__contacts-item">
                  +7 (347) 246 00 03
                </li>
                <li className="footer__contacts-item">
                  <a className="footer__menu-item__a" href="mailto:e.ufa@mail.ru">e.ufa@mail.ru</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});