/**
 * Created by antonkorchagin on 18.05.15.
 */

var React = require('react')
  , Router = require('react-router');

var Home = require('./pages/home.jsx')
  , Objects = require('./pages/projects.jsx')
  , ObjectDetails = require('./pages/project-details.jsx')
  , Services = require('./pages/services.jsx')
  , Invoice = require('./components/common/invoice.jsx');

var DefaultRoute = Router.DefaultRoute
  , Link = Router.Link
  , Route = Router.Route
  , RouteHandler = Router.RouteHandler;

var App = React.createClass({
  getInitialState: function(){
    return {
      popup: false
    }
  },
  togglePopup: function(){
    this.setState({popup: !this.state.popup});
  },
  render: function(){
    var cx = React.addons.classSet
      , appClass = cx({
        'app': true,
        'app-popup': this.state.popup
      });
    return (
      <div className={appClass}>
        <div className="app-holder">
        <header className="header">
          <div className="wrapper header-content">
            <Link className="header__logo" to="/" title="Главная">
              <img src="/public/img/layout/logo-new.png" height="61" alt="Электрощит Уфа"/>
            </Link>
            <div className="header__info">
              <div className="header__info-content">
                <div className="header__info-content_item">
                  <h4 className="header__info-content_item__title">Email</h4>
                  <h3 className="header__info-content_item__content">e.ufa@mail.ru</h3>
                </div>
                <div className="header__info-content_item">
                  <h4 className="header__info-content_item__title">Телефон</h4>
                  <h3 className="header__info-content_item__content">+7 (347) 246-00-03</h3>
                </div>
                <div className="header__info-content_item">
                  <h4 className="header__info-content_item__title">Часы работы</h4>
                  <h3 className="header__info-content_item__content">9:00 - 18:00</h3>
                </div>
              </div>
            </div>
            <div className="header__menu">
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <Link className="header__menu__link" to="app">Главная</Link>
                </li>
                <li className="header__menu-item">
                  <Link className="header__menu__link" to="services">Услуги</Link>
                </li>
                <li className="header__menu-item">
                  <Link className="header__menu__link" to="objects">Объекты</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <RouteHandler onPopup={this.togglePopup} {...this.state}/>
        <footer className="footer">
          <div className="wrapper columns">
            <div className="column column-s">
              <Link to="app" className="footer-company">
                ЭЛЕКТРОЩИТ<span className="footer-company_span">УФА</span>
              </Link>
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
                    <Link className="footer__menu-item__link" to="app">Главная</Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link className="footer__menu-item__link" to="services">Услуги</Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link className="footer__menu-item__link" to="objects">Объекты</Link>
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
                    <a className="footer__menu-item__link" href="mailto:e.ufa@mail.ru">e.ufa@mail.ru</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        </div>
        <Invoice togglePopup={this.togglePopup} />
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="objects" handler={Objects}/>
    <Route path="objects/:objectId" handler={ObjectDetails}/>
    <Route name="services" handler={Services}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler){
  React.render(<Handler/>, document.getElementById('site'));
});