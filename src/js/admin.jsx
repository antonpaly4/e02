var React = require('react')
  , Router = require('react-router');

var Home = require('./pages/admin-home.jsx')
  , SlideEdit = require('./pages/slider-edit.jsx')
  , Services = require('./pages/admin-services.jsx')
  , ServiceAdd = require('./pages/service-add.jsx')
  , Projects = require('./pages/projects-admin.jsx');

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
              <Link className="header__logo" to="/admin" title="Главная">
                <img src="/public/img/layout/logo-new.png" height="61" alt="Электрощит Уфа"/>
              </Link>
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
          <RouteHandler {...this.state}/>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/admin" handler={App}>
    <Route path="slider/add" handler={SlideEdit}/>
    <Route path="slider/edit/:slideId" handler={SlideEdit}/>
    <Route name="objects" handler={Projects}/>
    <Route name="services" handler={Services}/>
    <Route name="services/add" handler={ServiceAdd}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler){
  React.render(<Handler/>, document.getElementById('site'));
});