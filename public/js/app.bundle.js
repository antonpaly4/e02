webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by antonkorchagin on 18.05.15.
	 */
	
	var React = __webpack_require__(2)
	  , Router = __webpack_require__(13);
	
	var Home = __webpack_require__(8)
	  , Objects = __webpack_require__(9)
	  , ObjectDetails = __webpack_require__(10)
	  , Services = __webpack_require__(11)
	  , Invoice = __webpack_require__(12);
	
	var DefaultRoute = Router.DefaultRoute
	  , Link = Router.Link
	  , Route = Router.Route
	  , RouteHandler = Router.RouteHandler;
	
	var App = React.createClass({displayName: "App",
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
	      React.createElement("div", {className: appClass}, 
	        React.createElement("div", {className: "app-holder"}, 
	        React.createElement("header", {className: "header"}, 
	          React.createElement("div", {className: "wrapper header-content"}, 
	            React.createElement(Link, {className: "header__logo", to: "/", title: "Главная"}, 
	              React.createElement("img", {src: "/public/img/layout/logo-new.png", height: "61", alt: "Электрощит Уфа"})
	            ), 
	            React.createElement("div", {className: "header__info"}, 
	              React.createElement("div", {className: "header__info-content"}, 
	                React.createElement("div", {className: "header__info-content_item"}, 
	                  React.createElement("h4", {className: "header__info-content_item__title"}, "Email"), 
	                  React.createElement("h3", {className: "header__info-content_item__content"}, "e.ufa@mail.ru")
	                ), 
	                React.createElement("div", {className: "header__info-content_item"}, 
	                  React.createElement("h4", {className: "header__info-content_item__title"}, "Телефон"), 
	                  React.createElement("h3", {className: "header__info-content_item__content"}, "+7 (347) 246-00-03")
	                ), 
	                React.createElement("div", {className: "header__info-content_item"}, 
	                  React.createElement("h4", {className: "header__info-content_item__title"}, "Часы работы"), 
	                  React.createElement("h3", {className: "header__info-content_item__content"}, "9:00 - 18:00")
	                )
	              )
	            ), 
	            React.createElement("div", {className: "header__menu"}, 
	              React.createElement("ul", {className: "header__menu-list"}, 
	                React.createElement("li", {className: "header__menu-item"}, 
	                  React.createElement(Link, {className: "header__menu__link", to: "app"}, "Главная")
	                ), 
	                React.createElement("li", {className: "header__menu-item"}, 
	                  React.createElement(Link, {className: "header__menu__link", to: "services"}, "Услуги")
	                ), 
	                React.createElement("li", {className: "header__menu-item"}, 
	                  React.createElement(Link, {className: "header__menu__link", to: "objects"}, "Объекты")
	                )
	              )
	            )
	          )
	        ), 
	        React.createElement(RouteHandler, React.__spread({onPopup: this.togglePopup},  this.state)), 
	        React.createElement("footer", {className: "footer"}, 
	          React.createElement("div", {className: "wrapper columns"}, 
	            React.createElement("div", {className: "column column-s"}, 
	              React.createElement(Link, {to: "app", className: "footer-company"}, 
	                "ЭЛЕКТРОЩИТ", React.createElement("span", {className: "footer-company_span"}, "УФА")
	              ), 
	              React.createElement("div", {className: "footer__content"}, 
	                "ООО \"Электрощит-Уфа\" основано в 2008 году. Мы являемся одной из крупнейших компаний Башкирии по реализации сложных объектов внешнего м внутреннего электроснабжения."
	              )
	            ), 
	            React.createElement("div", {className: "column column-s"}, 
	              React.createElement("div", {className: "footer__title"}, 
	                "Меню", 
	                React.createElement("div", {className: "footer__title-border"}, 
	                  React.createElement("div", {className: "footer__title-border_orange"})
	                )
	              ), 
	              React.createElement("div", {className: "footer__menu"}, 
	                React.createElement("ul", null, 
	                  React.createElement("li", {className: "footer__menu-item"}, 
	                    React.createElement(Link, {className: "footer__menu-item__link", to: "app"}, "Главная")
	                  ), 
	                  React.createElement("li", {className: "footer__menu-item"}, 
	                    React.createElement(Link, {className: "footer__menu-item__link", to: "services"}, "Услуги")
	                  ), 
	                  React.createElement("li", {className: "footer__menu-item"}, 
	                    React.createElement(Link, {className: "footer__menu-item__link", to: "objects"}, "Объекты")
	                  )
	                )
	              )
	            ), 
	            React.createElement("div", {className: "column column-s"}, 
	              React.createElement("div", {className: "footer__title"}, 
	                "Связь с нами", 
	                React.createElement("div", {className: "footer__title-border"}, 
	                  React.createElement("div", {className: "footer__title-border_orange"})
	                )
	              ), 
	              React.createElement("div", {className: "footer__content"}, 
	                React.createElement("ul", null, 
	                  React.createElement("li", {className: "footer__contacts-item"}, 
	                    "г. Уфа, ул. Пархоменко, д. 133/1б оф. 301"
	                  ), 
	                  React.createElement("li", {className: "footer__contacts-item"}, 
	                    "+7 (347) 246 00 03"
	                  ), 
	                  React.createElement("li", {className: "footer__contacts-item"}, 
	                    React.createElement("a", {className: "footer__menu-item__link", href: "mailto:e.ufa@mail.ru"}, "e.ufa@mail.ru")
	                  )
	                )
	              )
	            )
	          )
	        )
	        ), 
	        React.createElement(Invoice, {togglePopup: this.togglePopup})
	      )
	    );
	  }
	});
	
	var routes = (
	  React.createElement(Route, {name: "app", path: "/", handler: App}, 
	    React.createElement(Route, {name: "objects", handler: Objects}), 
	    React.createElement(Route, {path: "objects/:objectId", handler: ObjectDetails}), 
	    React.createElement(Route, {name: "services", handler: Services}), 
	    React.createElement(DefaultRoute, {handler: Home})
	  )
	);
	
	Router.run(routes, Router.HistoryLocation, function(Handler){
	  React.render(React.createElement(Handler, null), document.getElementById('site'));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	  , _ = __webpack_require__(37);
	
	var Server = __webpack_require__(23);
	
	var ServicesList = __webpack_require__(28);
	
	module.exports = React.createClass({displayName: "module.exports",
	
	  getInitialState: function(){
	    return {services: []};
	  },
	  componentWillMount: function(){
	    var self = this;
	    Server.get('services').done(function(services){
	      var sCount = services.length
	        , sRowsCount = Math.ceil(sCount / 3)
	        , sRows = [];
	
	      for(var i = 0; i < sRowsCount; i++){
	        sRows.push(services.slice(0, 3));
	        services = services.slice(3);
	      }
	      self.setState({
	        services: sRows
	      });
	    })
	  },
	  openPopup: function(){
	    this.props.openPopup();
	  },
	  render: function(){
	
	    return(
	      React.createElement("div", {className: "page"}, 
	        React.createElement("div", {className: "page__cover services-cover"}, 
	          React.createElement("div", {className: "page__cover-overlay"}, 
	            React.createElement("div", {className: "wrapper page__title-wrapper"}, 
	              React.createElement("h2", {className: "page__title"}, "Наши услуги")
	            )
	          )
	        ), 
	        React.createElement("div", {className: "services__action"}, 
	          React.createElement("span", {className: "button blue inline", onClick: this.openPopup}, "Отправить заявку")
	        ), 
	        React.createElement("div", {className: "services__list"}, 
	          _.map(this.state.services, function(row, index){
	            return(
	              React.createElement(ServicesList, React.__spread({},  row, {key: index}))
	            )
	          })
	        ), 
	        React.createElement("div", {className: "services__action"}, 
	          React.createElement("span", {className: "button orange inline", onClick: this.openPopup}, "Отправить заявку")
	        )
	      )
	    )
	  }
	
	});

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by antonkorchagin on 28.05.15.
	 */
	
	var React = __webpack_require__(2);
	
	var Page = __webpack_require__(19);
	
	var sliderItems = [
	  {
	    image: 'public/img/layout/sl-station-hd.jpg',
	    title: 'Заголовок первого лозунга',
	    text: 'Мотивирующий текст о компании или одном из видов предоставляемых ею услуг. Резко, хлестко, о том, как у нас все круто и какие мы молодцы ;-)'
	  },
	  {
	    image: 'public/img/layout/sl-pipes-hd.jpg',
	    title: 'Заголовок второго лозунга',
	    text: 'Еще один текст о том, какие мы крутые, что можем сделать, призывом доверить нам электрификацию всей страны'
	  }
	];
	
	var services = [
	  {
	    image: 'public/img/layout/type-job.jpg',
	    title: 'Работы "под ключ"',
	    text: '<p>На сегодняшний день ООО «Электрощит-Уфа» обладает необходимым опытом, технологиями, оборудованием и механизмами для реализации проектов строительства высоковольтных электроустановок, строительства подстанций напряжением до 220кВ включительно, монтажа кабельных линий, линий связи ВОЛС и других электроустановок «под ключ».</p>'+
	      '<p>Благодаря профессионализму и большому опыту в области строительства высоковольтных линий электропередач, мы способны в комплексе решить задачи организации гарантированного бесперебойного электропитания всего технологического оборудования и строительного объекта в целом.</p>'
	  },
	  {
	    image: 'public/img/layout/type-project-job.jpg',
	    title: 'Проектирование',
	    text: '<p>Мы осуществляем комплексное проектирование объектов внешнего электроснабжения: высоковольтных линий электропередач, подстанций высокого класса напряжения.</p>'+
	    '<p>Первостепенными задачами в проектировании для нашей компании являются: своевременное и качественное обеспечение реализации всех этапов проектирования и строительства объектов; календарное планирование по вверенным проектам; мониторинг реализации и оперативная отчетность по исполнению проектов; планирование и контроль на всех этапах строительно-монтажных и пуско-наладочных работ.</p>'
	  },
	  {
	    image: 'public/img/layout/type-smartgrid.jpg',
	    title: '"Умные" сети SmartGrid',
	    text: '<p>Одним из новых направлений развития ООО «Электрощит-Уфа» является комплексная работа по организации энергетической системы нового поколения SmartGrid. Это система, работающая в автоматическом режиме, способная повысить эффективность, надежность энергопоставок, улучшить экономическую составляющую, а также наладить устойчивое производство и распределение электроэнергии. Суть энергетической системы, построенной на принципах SmartGrid, состоит в том, что она передает не только энергию, но и информацию.</p>'
	  }
	];
	
	
	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    return (
	        React.createElement(Page, {sliderItems: sliderItems, servicesItems: services, onPopup: this.props.onPopup})
	    );
	  }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	var Page = __webpack_require__(21);
	
	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    return (
	      React.createElement(Page, null)
	    );
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	var Page = __webpack_require__(20);
	
	module.exports = React.createClass({displayName: "module.exports",
	  componentWillMount: function(){
	    this.objectId = this.props.params.objectId;
	  },
	  objectId: null,
	  render: function(){
	    return (
	      React.createElement(Page, {objectId: this.objectId})
	    );
	  }
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	var Page = __webpack_require__(1);
	
	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    return (
	      React.createElement(Page, {openPopup: this.props.onPopup})
	    );
	  }
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	module.exports = React.createClass({displayName: "module.exports",
	  closePopup: function(){
	    this.props.togglePopup();
	  },
	  render: function(){
	    return(
	      React.createElement("div", {className: "invoice"}, 
	        React.createElement("div", {className: "invoice-wrapper"}, 
	          React.createElement("div", {className: "invoice-holder"}, 
	            React.createElement("div", {className: "invoice__popup"}, 
	              React.createElement("div", {className: "invoice__popup-header"}, 
	                React.createElement("h3", null, "Отправить заявку")
	              ), 
	              React.createElement("div", {className: "invoice__popup-content"}, 
	                React.createElement("input", {className: "invoice__popup__field", placeholder: "Название организации"}), 
	                React.createElement("input", {className: "invoice__popup__field", placeholder: "Телефон"}), 
	                React.createElement("input", {className: "invoice__popup__field", placeholder: "Email"}), 
	                React.createElement("input", {className: "invoice__popup__field", placeholder: "Контактное лицо"}), 
	                React.createElement("textarea", {className: "invoice__popup__field invoice__popup__field-textarea", placeholder: "Опишите необходимые услуги"}), 
	                React.createElement("div", {className: "invoice__popup-actions"}, 
	                  React.createElement("span", {className: "button blue inline"}, "Отправить"), 
	                  React.createElement("span", {className: "button orange inline", onClick: this.closePopup}, "Закрыть")
	                )
	              )
	            )
	          )
	        )
	      )
	    )
	  }
	})

/***/ },
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	var Slider = __webpack_require__(29)
	  , Banner = __webpack_require__(30)
	  , Services = __webpack_require__(31)
	  , Projects = __webpack_require__(32)
	  , Priority = __webpack_require__(33)
	  , Statistic = __webpack_require__(34)
	  , Partners = __webpack_require__(35)
	  , Map = __webpack_require__(36);
	
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState: function(){
	    return {};
	  },
	  componentWillMount: function(){
	
	
	
	  },
	  render: function(){
	
	    return(
	      React.createElement("div", {className: "page"}, 
	        React.createElement(Slider, null), 
	        React.createElement(Banner, {openPopup: this.props.onPopup}), 
	        React.createElement(Services, null), 
	        React.createElement(Projects, null), 
	        React.createElement(Priority, null), 
	        React.createElement(Statistic, null), 
	        React.createElement(Partners, null), 
	        React.createElement(Map, null)
	      )
	    )
	
	  }
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	  , _ = __webpack_require__(37);
	
	var Server = __webpack_require__(23);
	
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState: function(){
	    return {
	      title: null,
	      images: [],
	      summary: [],
	      fullDescription: null
	    };
	  },
	  componentWillMount: function(){
	    var id = this.props.objectId
	      , self = this;
	
	    Server.getItem('objects', id).done(function(data){
	      self.setState(data);
	    });
	  },
	  render: function(){
	    var mainPhoto = {backgroundImage: 'url(/public/img/projects/photos/' + this.state.images[0] + ')'}
	      , photos = this.state.images.slice(1);
	    return(
	      React.createElement("div", {className: "page"}, 
	        React.createElement("div", {className: "page__cover projects-cover"}, 
	          React.createElement("div", {className: "page__cover-overlay"}, 
	            React.createElement("div", {className: "wrapper page__title-wrapper"}, 
	              React.createElement("h2", {className: "page__title"}, this.state.title)
	            )
	          )
	        ), 
	        React.createElement("div", {className: "wrapper project-details"}, 
	          React.createElement("div", {className: "project-details__top"}, 
	            React.createElement("div", {className: "project-details__summary"}, 
	              React.createElement("h4", {className: "project-details__summary-title"}, "Общая информация"), 
	              _.map(this.state.summary, function(item, index){
	                return(
	                  React.createElement("p", {className: "project-details__summary-item", key: index}, item)
	                )
	              })
	            ), 
	            React.createElement("div", {className: "project-details__photos"}, 
	              React.createElement("div", {className: "project-details__photos__photo project-details__photos__photo-main", style: mainPhoto}), 
	              React.createElement("div", null, 
	                _.map(photos, function(photo, index){
	                  var style = {backgroundImage: 'url(/public/img/projects/photos/' + photo + ')'};
	                  return(
	                    React.createElement("div", {className: "project-details__photos__photo project-details__photos__photo-small", style: style, key: index})
	                  )
	                })
	              )
	            )
	          ), 
	          React.createElement("div", {className: "project-details__description"}, 
	            React.createElement("h4", {className: "project-details__description-title"}, "Описание"), 
	            React.createElement("p", {dangerouslySetInnerHTML: {__html: this.state.fullDescription}})
	          )
	        )
	      )
	    )
	  }
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	  , _ = __webpack_require__(37);
	
	var Header = __webpack_require__(26)
	  , Server = __webpack_require__(23);
	
	var IMAGES_PATH = 'public/img/projects/photos/';
	
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState: function(){
	    return {
	      currentActive: 'all'
	    }
	  },
	  componentWillMount: function(){
	    var self = this;
	    Server.get('objects').done(function(data){
	      self.setState({projects: data});
	    });
	  },
	  switchType: function(type){
	    this.setState({currentActive: type});
	  },
	  render: function(){
	    var cx = React.addons.classSet
	      , self = this
	      , counter = 0;
	    return(
	      React.createElement("div", {className: "page"}, 
	        React.createElement("div", {className: "page__cover projects-cover"}, 
	          React.createElement("div", {className: "page__cover-overlay"}, 
	            React.createElement("div", {className: "wrapper page__title-wrapper"}, 
	              React.createElement("h2", {className: "page__title"}, "Наши объекты")
	            )
	          )
	        ), 
	        React.createElement(Header, React.__spread({switchType: this.switchType},  this.state)), 
	        React.createElement("div", {className: "wrapper projects__list"}, 
	          _.map(this.state.projects, function(project, i){
	            var classes = cx({
	                'projects__item': true,
	                'projects__item-desc_left': counter%2 !== 0,
	                'hidden': self.state.currentActive !== 'all' ? self.state.currentActive !== project.type : false
	              })
	              , style = {'backgroundImage': 'url(' + IMAGES_PATH + project.images[0] + ')'}
	              , details = "/objects/" + project._id;
	            counter++;
	            return(
	              React.createElement("div", {className: classes, style: style, key: i}, 
	                React.createElement("div", {className: "projects__item__description"}, 
	                  React.createElement("h4", {className: "projects__item__description-title"}, project.title), 
	                  React.createElement("p", {className: "projects__item__description-text"}, project.description), 
	                  React.createElement("a", {className: "button orange", href: details}, "Подробнее")
	                )
	              )
	            )
	          })
	        )
	      )
	    )
	  }
	});

/***/ },
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	  , _ = __webpack_require__(37);
	
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState: function(){
	    return {
	      currentActive: this.props.currentActive,
	      items: [
	        {
	          type: 'all',
	          title: 'Все работы'
	        },
	        {
	          type: 'key',
	          title: 'Под ключ'
	        },
	        {
	          type: 'projects',
	          title: 'Проектирование'
	        },
	        {
	          type: 'smartgrid',
	          title: 'Smart Grid'
	        }
	      ]
	    };
	  },
	  componentWillReceiveProps: function(props){
	    this.setState({currentActive: props.currentActive})
	  },
	  switchItems: function(type){
	    this.props.switchType(type);
	  },
	  render: function(){
	    var self = this;
	    return(
	      React.createElement("div", {className: "projects__header"}, 
	        React.createElement("div", {className: "wrapper projects__header-content"}, 
	          React.createElement("a", {className: "projects__header-title", href: "#/objects"}, "Последние объекты"), 
	          React.createElement("nav", {className: "projects__header__menu"}, 
	            React.createElement("ul", null, 
	              _.map(this.state.items, function(item, i){
	                var cx = React.addons.classSet
	                  , classes = cx({
	                    'projects__header__menu-item__link': true,
	                    'active': self.state.currentActive == item.type
	                  });
	                return(
	                  React.createElement("li", {className: "projects__header__menu-item", key: i}, 
	                    React.createElement("span", {className: classes, onClick: self.switchItems.bind(null, item.type)}, item.title)
	                  )
	                )
	              })
	            )
	          )
	        )
	      )
	    )
	  }
	});

/***/ },
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	  , _ = __webpack_require__(37);
	
	var IMAGE_PATH = '/public/img/layout/';
	
	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    return(
	        React.createElement("div", {className: "wrapper content columns"}, 
	          _.map(this.props, function(service, i) {
	            return(React.createElement("div", {className: "column column-s services__item", key: i}, 
	              React.createElement("img", {className: "services__image", src: IMAGE_PATH + service.image, alt: service.title}), 
	              React.createElement("h2", {className: "services__title"}, service.title), 
	              React.createElement("div", {className: "services__description", dangerouslySetInnerHTML: {__html: service.text}})
	            )
	            )})
	          
	        )
	    )
	  }
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	  , _ = __webpack_require__(37)
	  , $ = __webpack_require__(38);
	
	var Server = __webpack_require__(23);
	
	var Slider = React.createClass({displayName: "Slider",
	  interval: null,
	  getInitialState: function(){
	    return {};
	  },
	  componentWillMount: function(){
	    var self = this;
	    Server.get('slider').done(function(data){
	      self.setState({slides: data});
	    });
	  },
	  componentDidMount: function(){
	    var $activeSlide = $('.js-home-slide:eq(0)')
	      , $slideText = $activeSlide.find('.js-slide-text');
	    $activeSlide.addClass('active');
	    $slideText.addClass('visible');
	
	    this.interval = setInterval(this.slide, 6000);
	  },
	  componentDidUnmount: function(){
	    clearInterval(this.interval);
	  },
	  slide: function(){
	    var $activeSlide = $('.js-home-slide.active')
	      , $nextSlide = $activeSlide.next('.js-home-slide').length ? $activeSlide.next('.js-home-slide') : $('.js-home-slide:eq(0)')
	      , $slideText = $nextSlide.find('.js-slide-text');
	    $activeSlide
	      .removeClass('active')
	      .find('.js-slide-text')
	      .removeClass('visible');
	    $nextSlide.addClass('active');
	    setTimeout(function(){$slideText.addClass('visible')}, 700);
	  },
	  render: function(){
	    return(
	      React.createElement("div", {className: "home-slider"}, 
	        _.map(this.state.slides, function(item, index){
	          var style = {'backgroundImage': 'url(' + Settings.filesPath + item.image + ')'}
	            , text = item.description.replace(/([^>])\n/g, '$1<br/>');
	          return (
	            React.createElement("div", {className: "home-slider__image js-home-slide", style: style, key: index}, 
	              React.createElement("div", {className: "home-slider__text js-slide-text"}, 
	                React.createElement("h3", {className: "home-slider__text-title"}, item.title), 
	                React.createElement("div", {className: "home-slider__text-descripton", dangerouslySetInnerHTML: {__html: text}})
	              )
	            )
	          );
	        })
	      )
	    );
	  }
	});
	
	module.exports = Slider;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	module.exports = React.createClass({displayName: "module.exports",
	  openInvoice: function(){
	    this.props.openPopup();
	  },
	  render: function(){
	    return(
	      React.createElement("div", {className: "home-banner"}, 
	        React.createElement("div", {className: "home-banner__content wrapper"}, 
	          "Реализуем объекты \"под ключ\" от проектирования до запуска", 
	          React.createElement("span", {className: "button orange pull-right home-banner__button", onClick: this.openInvoice}, "Отправить заявку"), 
	          React.createElement("a", {className: "button blue pull-right home-banner__button", href: "/objects"}, "Завершенные объекты")
	        )
	      )
	    )
	  }
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	  , _ = __webpack_require__(37);
	
	var ServicesList = __webpack_require__(28);
	
	var Server = __webpack_require__(23);
	
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState: function(){
	    return {services: []};
	  },
	  componentWillMount: function(){
	    var self = this;
	    Server.get('services').done(function(data){
	      self.setState({services: _.where(data, {onMainPage: true})})
	    })
	  },
	  render: function(){
	    return(
	      React.createElement("div", {className: "home-services"}, 
	        React.createElement(ServicesList, React.__spread({},  this.state.services)), 
	        React.createElement("div", {className: "wrapper home-services__footer"}, 
	          React.createElement("a", {href: "#/services", className: "button orange"}, "Все услуги")
	        )
	      )
	    );
	  }
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	  , _ = __webpack_require__(37)
	  , $ = __webpack_require__(38);
	
	var Header = __webpack_require__(26);
	
	var Server = __webpack_require__(23);
	
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState: function(){
	    return {
	      currentActive: 'all',
	      projects: []
	    }
	  },
	  componentWillMount: function(){
	    var self = this;
	    Server.get('objects').done(function(data){
	      self.setState({projects: data});
	    });
	  },
	  switchType: function(type){
	    this.setState({currentActive: type});
	  },
	  render: function(){
	    var self = this;
	    return(
	      React.createElement("div", {className: "home-projects"}, 
	        React.createElement(Header, React.__spread({switchType: this.switchType},  this.state)), 
	        React.createElement("div", {className: "wrapper content"}, 
	          React.createElement("div", {className: "home-projects__gallery"}, 
	            _.map(this.state.projects, function(project, i){
	              var cx = React.addons.classSet
	                , classes = cx({
	                  'home-projects__gallery-item': true,
	                  'hidden': self.state.currentActive !== 'all' ? self.state.currentActive !== project.type : false
	                });
	
	              return(
	                React.createElement("div", {className: classes, key: i}, 
	                  React.createElement("img", {src: Settings.filesPath + project.images[0], className: "home-projects__gallery-item__image"}), 
	                  React.createElement("div", {className: "home-projects__gallery-item__description"}, 
	                    React.createElement("h3", {className: "home-projects__gallery-item__description-title"}, project.title), 
	                    React.createElement("p", {className: "home-projects__gallery-item__description-text", dangerouslySetInnerHTML: {__html: project.shortDescription}}), 
	                    React.createElement("a", {href: "/objects/" + project.link, className: "button orange"}, "Подробнее")
	                  )
	                )
	              )
	            })
	            
	          )
	        )
	      )
	    )
	  }
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    return(
	      React.createElement("div", {className: "priority-block"}, 
	        React.createElement("div", {className: "wrapper"}, 
	          React.createElement("h3", {className: "priority-block__title"}, "Наши преимущества"), 
	          React.createElement("div", {className: "columns"}, 
	            React.createElement("div", {className: "column column-s"}, 
	              React.createElement("div", {className: "priority-block__icon priority-block__icon-tech"}), 
	              React.createElement("div", {className: "priority-block__description"}, 
	                React.createElement("h4", {className: "priority-block__description-title"}, "Передовые технологии"), 
	                React.createElement("p", {className: "priority-block__description-text"}, "Используем высокотехнологичные и самые передовые инженерные решения")
	              )
	            ), 
	            React.createElement("div", {className: "column column-s"}, 
	              React.createElement("div", {className: "priority-block__icon priority-block__icon-eco"}), 
	              React.createElement("div", {className: "priority-block__description"}, 
	                React.createElement("h4", {className: "priority-block__description-title"}, "Экологическая безопасность"), 
	                React.createElement("p", {className: "priority-block__description-text"}, "Безусловно соблюдаем стандарты и правила в области природопользования, экологической безопасности и охраны окружающей среды")
	              )
	            ), 
	            React.createElement("div", {className: "column column-s"}, 
	              React.createElement("div", {className: "priority-block__icon priority-block__icon-client"}), 
	              React.createElement("div", {className: "priority-block__description"}, 
	                React.createElement("h4", {className: "priority-block__description-title"}, "Работа с клиентами"), 
	                React.createElement("p", {className: "priority-block__description-text"}, "Максимально эффективно, качественно и своевременно удовлетворяем потребности наших клиентов")
	              )
	            )
	          )
	        )
	      )
	    )
	  }
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    return(
	      React.createElement("div", {className: "statistic-home"}, 
	        React.createElement("div", {className: "statistic-home__wrapper"}, 
	          React.createElement("div", {className: "wrapper columns"}, 
	            React.createElement("div", {className: "column column-s statistic-home__item statistic-home__item-objects"}, 
	              React.createElement("div", {className: "statistic-home__item__text"}, 
	                React.createElement("span", {className: "statistic-home__item__text-data"}, "130"), React.createElement("br", null), 
	                "законченных объектов"
	              )
	            ), 
	            React.createElement("div", {className: "column column-s statistic-home__item statistic-home__item-personal"}, 
	              React.createElement("div", {className: "statistic-home__item__text"}, 
	                React.createElement("span", {className: "statistic-home__item__text-data"}, "769"), React.createElement("br", null), 
	                "квалифицированных сотрудников"
	              )
	            ), 
	            React.createElement("div", {className: "column column-s statistic-home__item statistic-home__item-partners"}, 
	              React.createElement("div", {className: "statistic-home__item__text"}, 
	                React.createElement("span", {className: "statistic-home__item__text-data"}, "12"), React.createElement("br", null), 
	                "компаний-партнеров"
	              )
	            )
	          )
	        )
	      )
	    )
	  }
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    return(
	      React.createElement("div", {className: "partners-block"}, 
	        React.createElement("div", {className: "wrapper"}, 
	          React.createElement("h3", {className: "partners-block__title"}, "Наши партнеры"), 
	          React.createElement("div", {className: "partners-block__content"}, 
	            React.createElement("div", {className: "partners-block__item"}, 
	              React.createElement("div", {className: "partners-block__item-image"}, 
	                React.createElement("div", {className: "partners-block__item-image_holder"}, 
	                  React.createElement("img", {src: "public/img/partners/arsenal-01.png", height: "60", alt: "Арсенал-01"})
	                )
	              ), 
	              React.createElement("div", {className: "partners-block__item-title"}, "Арсенал-01")
	            ), 
	            React.createElement("div", {className: "partners-block__item"}, 
	              React.createElement("div", {className: "partners-block__item-image"}, 
	                React.createElement("div", {className: "partners-block__item-image_holder"}, 
	                  React.createElement("img", {src: "public/img/partners/invent-el.png", height: "20", alt: "ИНВЭНТ-Электро"})
	                )
	              ), 
	              React.createElement("div", {className: "partners-block__item-title"}, "ИНВЭНТ-Электро")
	            ), 
	            React.createElement("div", {className: "partners-block__item"}, 
	              React.createElement("div", {className: "partners-block__item-image"}, 
	                React.createElement("div", {className: "partners-block__item-image_holder"}, 
	                  React.createElement("img", {src: "public/img/partners/mechanotronic.png", height: "60", alt: "Механотроника"})
	                )
	              ), 
	              React.createElement("div", {className: "partners-block__item-title"}, "Механотроника")
	            ), 
	            React.createElement("div", {className: "partners-block__item"}, 
	              React.createElement("div", {className: "partners-block__item-image"}, 
	                React.createElement("div", {className: "partners-block__item-image_holder"}, 
	                  React.createElement("img", {src: "public/img/partners/peredovye-s.png", height: "60", alt: "Передовые Системы"})
	                )
	              ), 
	              React.createElement("div", {className: "partners-block__item-title"}, "Передовые Системы")
	            ), 
	            React.createElement("div", {className: "partners-block__item"}, 
	              React.createElement("div", {className: "partners-block__item-image"}, 
	                React.createElement("div", {className: "partners-block__item-image_holder"}, 
	                  React.createElement("img", {src: "public/img/partners/promnasos.png", height: "50", alt: "ПромНасосИнжиниринг"})
	                )
	              ), 
	              React.createElement("div", {className: "partners-block__item-title"}, "ПромНасосИнжиниринг")
	            ), 
	            React.createElement("div", {className: "partners-block__item"}, 
	              React.createElement("div", {className: "partners-block__item-image"}, 
	                React.createElement("div", {className: "partners-block__item-image_holder"}, 
	                  React.createElement("img", {src: "public/img/partners/russvet.png", height: "45", alt: "Русский Свет"})
	                )
	              ), 
	              React.createElement("div", {className: "partners-block__item-title"}, "Русский Свет")
	            ), 
	            React.createElement("div", {className: "partners-block__item"}, 
	              React.createElement("div", {className: "partners-block__item-image"}, 
	                React.createElement("div", {className: "partners-block__item-image_holder"}, 
	                  React.createElement("img", {src: "public/img/partners/sivar.png", height: "35", alt: "Сивар"})
	                )
	              ), 
	              React.createElement("div", {className: "partners-block__item-title"}, "Сивар")
	            ), 
	            React.createElement("div", {className: "partners-block__item"}, 
	              React.createElement("div", {className: "partners-block__item-image"}, 
	                React.createElement("div", {className: "partners-block__item-image_holder"}, 
	                  React.createElement("img", {src: "public/img/partners/tatcable.png", height: "35", alt: "ТатКабель"})
	                )
	              ), 
	              React.createElement("div", {className: "partners-block__item-title"}, "ТатКабель")
	            ), 
	            React.createElement("div", {className: "partners-block__item"}, 
	              React.createElement("div", {className: "partners-block__item-image"}, 
	                React.createElement("div", {className: "partners-block__item-image_holder"}, 
	                  React.createElement("img", {src: "public/img/partners/enoset.png", height: "60", alt: "ЭнергоСеть"})
	                )
	              ), 
	              React.createElement("div", {className: "partners-block__item-title"}, "ЭнергоСеть")
	            ), 
	            React.createElement("div", {className: "partners-block__item"}, 
	              React.createElement("div", {className: "partners-block__item-image"}, 
	                React.createElement("div", {className: "partners-block__item-image_holder"}, 
	                  React.createElement("img", {src: "public/img/partners/etm.png", height: "60", alt: "ЭТМ"})
	                )
	              ), 
	              React.createElement("div", {className: "partners-block__item-title"}, "ЭТМ")
	            ), 
	            React.createElement("div", {className: "partners-block__item"}, 
	              React.createElement("div", {className: "partners-block__item-image"}, 
	                React.createElement("div", {className: "partners-block__item-image_holder"}, 
	                  React.createElement("img", {src: "public/img/partners/elshit-s.png", height: "35", alt: "Электрощит-Самара"})
	                )
	              ), 
	              React.createElement("div", {className: "partners-block__item-title"}, "Электрощит-Самара")
	            ), 
	            React.createElement("div", {className: "partners-block__item"}, 
	              React.createElement("div", {className: "partners-block__item-image"}, 
	                React.createElement("div", {className: "partners-block__item-image_holder"}, 
	                  React.createElement("img", {src: "public/img/partners/i-energy.png", height: "60", alt: "i-Energy"})
	                )
	              ), 
	              React.createElement("div", {className: "partners-block__item-title"}, "i-Energy")
	            )
	          )
	        )
	      )
	    )
	  }
	})

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	module.exports = React.createClass({displayName: "module.exports",
	  componentDidMount: function(){
	    ymaps.ready(init);
	    var myMap,
	      myPlacemark;
	
	    function init(){
	      myMap = new ymaps.Map("map", {
	        center: [54.7427146,55.9651986],
	        zoom: 16
	      });
	
	      myPlacemark = new ymaps.Placemark([54.7427146,55.9651986], {
	        hintContent: 'Электрощит-Уфа',
	        balloonContent: 'Пархоменко 133/1, оф. 301'
	      });
	
	      myMap.geoObjects.add(myPlacemark);
	    }
	  },
	  render: function(){
	    return(
	      React.createElement("div", {className: "home-map"}, 
	        React.createElement("div", {className: "home-map__header"}, "Мы на карте"), 
	        React.createElement("div", {className: "home-map__map", id: "map"})
	      )
	    )
	  }
	});

/***/ }
]);
//# sourceMappingURL=app.bundle.js.map