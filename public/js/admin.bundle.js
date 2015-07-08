webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	  , Router = __webpack_require__(13);
	
	var Home = __webpack_require__(3)
	  , SlideEdit = __webpack_require__(4)
	  , Services = __webpack_require__(5)
	  , ServiceAdd = __webpack_require__(6)
	  , Projects = __webpack_require__(7);
	
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
	              React.createElement(Link, {className: "header__logo", to: "/admin", title: "Главная"}, 
	                React.createElement("img", {src: "/public/img/layout/logo-new.png", height: "61", alt: "Электрощит Уфа"})
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
	          React.createElement(RouteHandler, React.__spread({},  this.state))
	        )
	      )
	    );
	  }
	});
	
	var routes = (
	  React.createElement(Route, {name: "app", path: "/admin", handler: App}, 
	    React.createElement(Route, {path: "slider/add", handler: SlideEdit}), 
	    React.createElement(Route, {path: "slider/edit/:slideId", handler: SlideEdit}), 
	    React.createElement(Route, {name: "objects", handler: Projects}), 
	    React.createElement(Route, {name: "services", handler: Services}), 
	    React.createElement(Route, {name: "services/add", handler: ServiceAdd}), 
	    React.createElement(DefaultRoute, {handler: Home})
	  )
	);
	
	Router.run(routes, Router.HistoryLocation, function(Handler){
	  React.render(React.createElement(Handler, null), document.getElementById('site'));
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	var Slider = __webpack_require__(14);
	
	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    return(
	      React.createElement("div", {className: "wrapper content"}, 
	        React.createElement(Slider, null)
	      )
	    )
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	var Form = __webpack_require__(15);
	
	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    return(
	      React.createElement("div", {className: "wrapper content"}, 
	        React.createElement(Form, {slideId: this.props.params.slideId})
	      )
	    )
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	var Services = __webpack_require__(16);
	
	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    return(
	      React.createElement("div", {className: "wrapper content"}, 
	        React.createElement(Services, null)
	      )
	    )
	  }
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	var Form = __webpack_require__(18);
	
	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    return(
	      React.createElement("div", {className: "wrapper content"}, 
	        React.createElement("div", {className: "widget"}, 
	          React.createElement("h3", null, "Услуги"), 
	          React.createElement("span", {className: "button orange add"}, "Добавить услугу"), 
	          React.createElement(Form, null)
	        )
	      )
	    )
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	var Projects = __webpack_require__(17);
	
	module.exports = React.createClass({displayName: "module.exports",
	  render: function(){
	    return(
	      React.createElement("div", {className: "wrapper content"}, 
	        React.createElement(Projects, null)
	      )
	    )
	  }
	});

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	  , _ = __webpack_require__(37);
	
	var Server = __webpack_require__(23);
	
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState: function(){
	    return {}
	  },
	  componentWillMount: function(){
	    var self = this;
	    Server.get('slider').done(function(data){
	      self.setState({slides: data});
	    });
	  },
	  deleteSlide: function(id){
	    var self = this;
	    Server.delete('slider', id).done(function(){
	      self.setState({slides: _.filter(self.state.slides, function(slide){return slide._id !== id})});
	    });
	  },
	  render: function(){
	    var self = this;
	    return(
	      React.createElement("div", {className: "widget"}, 
	        React.createElement("h3", null, "Слайдер"), 
	        React.createElement("a", {className: "button orange add", href: "/admin/slider/add"}, "Добавить слайд"), 
	        React.createElement("div", {className: "slider"}, 
	          _.map(this.state.slides, function(slide, index){
	            var text = slide.description.replace(/([^>])\n/g, '$1<br/>');
	            return(
	              React.createElement("div", {className: "slider__item", key: index}, 
	                React.createElement("img", {src: Settings.filesPath + slide.image, className: "slider__image"}), 
	                React.createElement("div", {className: "slider__description"}, 
	                  React.createElement("div", {className: "slider__title"}, slide.title), 
	                  React.createElement("div", {className: "slider__text", dangerouslySetInnerHTML: {__html: text}})
	                ), 
	                React.createElement("div", {className: "slider__item-clear"}), 
	                React.createElement("div", {className: "slider__item__actions"}, 
	                  React.createElement("a", {className: "button blue inline", href: '/admin/slider/edit/' + slide._id}, "Редактировать"), 
	                  React.createElement("span", {className: "button orange inline", onClick: self.deleteSlide.bind(null, slide._id)}, "Удалить")
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	var Uploader = __webpack_require__(22)
	  , Server = __webpack_require__(23)
	  , Validator = __webpack_require__(25);
	
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState: function(){
	    return {};
	  },
	  componentWillMount: function(){
	    var self = this;
	    if(this.props.slideId){
	      Server.getItem('slider', this.props.slideId).done(function(data){
	        self.setState(data);
	      })
	    }
	    else {
	      this.setState({
	        image: false,
	        title: null,
	        description: null
	      })
	    }
	  },
	  uploadFiles: function(){
	    var field = this.refs.image.getDOMNode()
	      , files = field.files
	      , self = this;
	
	    var file = Uploader.addFiles(files);
	
	    if(file[0].valid){
	      setTimeout(function(){self.setState({image: file[0].name})}, 5000);
	    }
	  },
	  changeImage: function(){
	    this.setState({image: false});
	    this.refs.image.getDOMNode().value = '';
	  },
	  changeTitle: function(e){
	    var title = e.target.value;
	    if(Validator.maxLength(title, 90)){
	      this.setState({title: title})
	    }
	    else{
	      e.preventDefault();
	    }
	  },
	  changeDesc: function(e){
	    var description = e.target.value;
	    if(Validator.maxLength(description, 300)) {
	      this.setState({description: description});
	    }
	    else{
	      e.preventDefault();
	    }
	  },
	  save: function(){
	    console.log(this.state);
	    if(this.state._id){
	      Server.update('slider', this.state._id, this.state).done(function (response) {
	        window.location.href = '/admin';
	      });
	    }
	    else {
	      Server.post('slider', this.state).done(function (response) {
	        window.location.href = '/admin';
	      });
	    }
	  },
	  render: function(){
	    var cx = React.addons.classSet
	      , imageClasses = cx({
	        'slider__edit': true,
	        'hidden': !this.state.image
	      })
	      , fileFieldClass = cx({
	        'form__field': true,
	        'hidden': this.state.image
	      });
	    return(
	      React.createElement("div", {className: "form"}, 
	        React.createElement("div", {className: imageClasses}, 
	          React.createElement("img", {className: "slider__edit_image", src: this.state.image ? Settings.filesPath + this.state.image : ''}), 
	          React.createElement("div", null, 
	            React.createElement("span", {className: "button orange", onClick: this.changeImage}, "Изменить картинку")
	          )
	        ), 
	        React.createElement("input", {className: fileFieldClass, type: "file", placeholder: "Изображение", multiple: "false", ref: "image", onChange: this.uploadFiles}), 
	        React.createElement("input", {className: "form__field", type: "text", onInput: this.changeTitle, onChange: this.changeTitle, placeholder: "Заголовок", value: this.state.title}), 
	        React.createElement("textarea", {className: "form__field form__field-textarea", onInput: this.changeDesc, onChange: this.changeDesc, placeholder: "Описание", value: this.state.description}), 
	        React.createElement("span", {className: "button orange", onClick: this.save}, "Сохранить")
	      )
	    )
	  }
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	  , _ = __webpack_require__(37);
	
	var Item = __webpack_require__(27);
	
	var Server = __webpack_require__(23);
	
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState: function(){
	    return {
	      services: [],
	      edit: null,
	      disableMainPage: false
	    };
	  },
	  componentWillMount: function(){
	    var self = this;
	
	    Server.get('services').done(function(data){
	      self.setState({services: data});
	
	      self.disableMainPage();
	    })
	  },
	  disableMainPage: function(){
	    var onMain = _.where(this.state.services, {onMainPage: true});
	    if(onMain.length >= 3){
	      this.setState({disableMainPage: true});
	    }
	    else{
	      this.setState({disableMainPage: false});
	    }
	  },
	  setEditing: function(id){
	    this.setState({edit: id});
	    console.log(this.state);
	  },
	  getEditingIndex: function(id){
	    var services = this.state.services
	      , service = _.findWhere(services, {_id: id || this.state.edit});
	      return _.indexOf(services, service);
	  },
	  saveItem: function(item){
	    var services = this.state.services
	      , index = this.getEditingIndex()
	      , self = this;
	
	    Server.update('services', this.state.edit, item).done(function(data){
	      services[index] = item;
	      self.setState({
	        edit: null,
	        services: services
	      });
	    });
	  },
	  toggleMainPage: function(id){
	    var services = this.state.services
	      , index = this.getEditingIndex(id)
	      , self = this;
	
	    if(this.state.disableMainPage && !services[index].onMainPage){
	      return false;
	    }
	
	    services[index].onMainPage = !services[index].onMainPage;
	    this.setState({services: services});
	    Server.update('services', id, services[index]).done(function(data){
	      self.disableMainPage();
	    });
	  },
	  cancelEditing: function(){
	    this.setState({edit: null});
	  },
	  render: function(){
	    var self = this;
	
	    return(
	      React.createElement("div", {className: "widget"}, 
	        React.createElement("h3", null, "Услуги"), 
	        React.createElement("a", {className: "button orange add", href: "/admin/services/add"}, "Добавить услугу"), 
	        React.createElement("div", {className: "services"}, 
	          _.map(this.state.services, function(service, index){
	            return(
	              React.createElement(Item, React.__spread({key: index, 
	                    editing: self.state.edit == service._id, 
	                    makeEditable: self.setEditing, 
	                    disableMainPage: self.state.disableMainPage, 
	                    save: self.saveItem, 
	                    onMain: self.toggleMainPage}, 
	                service))
	            )
	          })
	        )
	      )
	    )
	  }
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	  , _ = __webpack_require__(37);
	
	var Item = __webpack_require__(24);
	
	var Server = __webpack_require__(23);
	
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState: function(){
	    return {
	      objects: [],
	      edit: null,
	      disableMainPage: false
	    };
	  },
	  componentWillMount: function(){
	    var self = this;
	
	    Server.get('objects').done(function(data){
	      self.setState({objects: data});
	
	      self.disableMainPage();
	    })
	  },
	  disableMainPage: function(){
	    var onMain = _.where(this.state.services, {onMainPage: true});
	    if(onMain.length >= 3){
	      this.setState({disableMainPage: true});
	    }
	    else{
	      this.setState({disableMainPage: false});
	    }
	  },
	  setEditing: function(id){
	    this.setState({edit: id});
	  },
	  getEditingIndex: function(id){
	    var objects = this.state.objects
	      , project = _.findWhere(objects, {_id: id || this.state.edit});
	    return _.indexOf(objects, project);
	  },
	  saveItem: function(item){
	    var objects = this.state.objects
	      , index = this.getEditingIndex()
	      , self = this;
	
	    Server.update('objects', this.state.edit, item).done(function(data){
	      objects[index] = item;
	      self.setState({
	        edit: null,
	        objects: objects
	      });
	    });
	  },
	  toggleMainPage: function(id){
	    var objects = this.state.objects
	      , index = this.getEditingIndex(id)
	      , self = this;
	
	    if(this.state.disableMainPage && !objects[index].onMainPage){
	      return false;
	    }
	
	    objects[index].onMainPage = !objects[index].onMainPage;
	    this.setState({objects: objects});
	    Server.update('objects', id, objects[index]).done(function(data){
	      self.disableMainPage();
	    });
	  },
	  cancelEditing: function(){
	    this.setState({edit: null});
	  },
	  render: function(){
	    var self = this;
	
	    return(
	      React.createElement("div", {className: "widget"}, 
	        React.createElement("h3", null, "Объекты"), 
	        React.createElement("a", {className: "button orange add", href: "/admin/objects/add"}, "Добавить объект"), 
	        React.createElement("div", {className: "services"}, 
	          _.map(this.state.objects, function(object, index){
	            return(
	              React.createElement(Item, React.__spread({key: index, 
	                    editing: self.state.edit == object._id, 
	                    makeEditable: self.setEditing, 
	                    disableMainPage: self.state.disableMainPage, 
	                    save: self.saveItem, 
	                    onMain: self.toggleMainPage}, 
	                object))
	            )
	          })
	        )
	      )
	    )
	  }
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	var Validator = __webpack_require__(25)
	  , Uploader = __webpack_require__(22)
	  , Server = __webpack_require__(23);
	
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState: function(){
	    return {
	      image: false,
	      title: null,
	      text: null,
	      onMainPage: false
	    }
	  },
	  addImage: function(){
	    var files = this.refs.image.getDOMNode().files
	      , self = this;
	
	    var file = Uploader.addFiles(files);
	
	    if(file[0].valid){
	      setTimeout(function(){self.setState({image: file[0].name})}, 5000);
	    }
	  },
	  changeImage: function(){
	    this.setState({image: false});
	    this.refs.image.getDOMNode().value = '';
	  },
	  changeTitle: function(e){
	    var title = e.target.value;
	    if(Validator.maxLength(title, 100)){
	      this.setState({title: title});
	    }
	    else{
	      e.preventDefault();
	    }
	  },
	  changeDescr: function(e){
	    var text = e.target.value;
	    if(Validator.maxLength(text, 700)){
	      this.setState({text: text});
	    }
	    else{
	      e.preventDefault();
	    }
	  },
	  save: function(){
	    Server.post('services', this.state.edit, this.state).done(function(data){
	      window.location.href = '/admin/services';
	    });
	  },
	  cancelEdit: function(){
	    window.location.href = '/admin/services';
	  },
	  render: function(){
	    var cx = React.addons.classSet
	      , imageClass = cx({
	        'services__item__image-edit': true,
	        'hidden': !this.state.image
	      })
	      , imageEditClass = cx({
	        'form__field': true,
	        'hidden': this.state.image
	      });
	    return(
	      React.createElement("div", {className: "services__item"}, 
	        React.createElement("div", {className: "form"}, 
	          React.createElement("div", {className: imageClass}, 
	            React.createElement("img", {src: Settings.filesPath + this.state.image, className: "services__item__image", onChange: this.addImage}), 
	            React.createElement("div", {className: "services__item__actions"}, 
	              React.createElement("span", {className: "button blue inline", onClick: this.changeImage}, "Изменить")
	            )
	          ), 
	          React.createElement("input", {type: "file", multiple: "false", className: imageEditClass, ref: "image", onChange: this.addImage}), 
	          React.createElement("div", {className: "clear"}), 
	          React.createElement("input", {type: "text", className: "form__field", value: this.state.title, placeholder: "Название услуги", onInput: this.changeTitle, onChange: this.changeTitle}), 
	          React.createElement("textarea", {className: "form__field form__field-textarea", placeholder: "Описание услуги", value: this.state.text, onInput: this.changeDescr, onChange: this.changeDescr}), 
	          React.createElement("span", {className: "button orange inline", onClick: this.save}, "Сохранить"), 
	          React.createElement("a", {className: "button blue inline", href: "/admin/services"}, "Отменить")
	        )
	      )
	    )
	  }
	});

/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(37)
	  , $ = __webpack_require__(38);
	
	var Uploader = function(){
	  this.files = [];
	
	  var self = this
	    , types = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']
	    , maxSize = 5;
	
	  this.addFiles = function(files){
	    _.each(files, function(file){
	      var tmp = {
	        file: file,
	        name: file.name,
	        valid: false
	      };
	
	      tmp.valid = (types.indexOf(file.type) !== -1) && file.size / 1024 / 1024 <= maxSize;
	
	      self.files.unshift(tmp);
	
	      upload();
	    });
	
	    return self.files;
	  };
	
	  var uploadFile = function(index){
	    var file = self.files[index];
	
	    if(file.valid){
	      var data = new FormData();
	
	      data.append('uploadFile', file.file);
	
	      $.ajax({
	        url: '/upload',
	        data: data,
	        cache: false,
	        contentType: false,
	        processData: false,
	        type: 'POST',
	        success: function(response){
	          if(response.status == 'ok'){
	            return file;
	          }
	          else{
	            return response.errors;
	          }
	        }
	      })
	    }
	  };
	
	  var upload = function(){
	    _.each(self.files, function(file, index){
	      uploadFile(index);
	    })
	  }
	};
	
	module.exports = new Uploader();

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	  , _ = __webpack_require__(37);
	
	var Validator = __webpack_require__(25)
	  , Uploader = __webpack_require__(22);
	
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState: function(){
	    return {
	      _id: this.props._id,
	      title: this.props.title,
	      summary: this.props.summary,
	      images: this.props.images,
	      type: this.props.type,
	      fullDescription: this.props.fullDescription,
	      shortDescription: this.props.shortDescription,
	      description: this.props.description,
	      onMainPage: this.props.onMainPage
	    }
	  },
	  addImages: function(){
	    var files = this.refs.image.getDOMNode().files
	      , self = this
	      , uploaded = [];
	
	    console.log(files);
	    var file = Uploader.addFiles(files);
	    console.log(file);
	    for(var key in file){
	      if(file[key].valid){
	        uploaded.push(file[key].name);
	      }
	    }
	    setTimeout(function(){self.setState({images: uploaded})}, 5000);
	  },
	  changeImage: function(){
	    this.setState({images: []});
	    this.refs.image.getDOMNode().value = '';
	  },
	  changeTitle: function(e){
	    var title = e.target.value;
	    if(Validator.maxLength(title, 100)){
	      this.setState({title: title});
	    }
	    else{
	      e.preventDefault();
	    }
	  },
	  changeDescr: function(e){
	    var text = e.target.value;
	    if(Validator.maxLength(text, 700)){
	      this.setState({shortDescription: text});
	    }
	    else{
	      e.preventDefault();
	    }
	  },
	  makeEditable: function(){
	    this.props.makeEditable(this.props._id);
	  },
	  save: function(){
	    this.props.save(this.state);
	  },
	  cancelEdit: function(){
	    this.getInitialState();
	    this.props.cancelEditing();
	  },
	  toggleMain: function(){
	    this.props.onMain(this.props._id);
	  },
	  render: function(){
	    var cx = React.addons.classSet
	      , viewClass = cx({
	        'view': true,
	        'hidden': this.props.editing
	      })
	      , formClass = cx({
	        'form': true,
	        'hidden': !this.props.editing
	      })
	      , mainPageClass = cx({
	        'button orange inline': true,
	        'active': this.props.onMainPage,
	        'disabled': !this.props.onMainPage && this.props.disableMainPage
	      })
	      , imageClass = cx({
	        'services__item__image-edit': true,
	        'hidden': !this.state.images.length
	      })
	      , imageEditClass = cx({
	        'form__field': true,
	        'hidden': this.state.images.length
	      });
	    return(
	      React.createElement("div", {className: "services__item"}, 
	        React.createElement("div", {className: viewClass}, 
	          React.createElement("div", {className: "objects__images"}, 
	            _.map(this.props.images, function(image, index){
	              var style = {backgroundImage: 'url(' + Settings.filesPath + image + ')'};
	              return(
	                React.createElement("div", {className: "objects__image", key: index, style: style})
	              )
	            })
	          ), 
	          React.createElement("div", {className: "objects__actions"}, 
	            React.createElement("span", {className: "button blue inline", onClick: this.makeEditable}, "Редактировать"), 
	            React.createElement("span", {className: "button orange inline"}, "Удалить"), 
	            React.createElement("span", {className: mainPageClass, onClick: this.toggleMain}, "Показывать на главной")
	          ), 
	          React.createElement("div", {className: "services__item__title"}, this.props.title), 
	          React.createElement("h3", {className: "objects__block-title"}, "Краткое описание (блок на главной)"), 
	          React.createElement("div", {className: "services__item__description", dangerouslySetInnerHTML: {__html: this.props.shortDescription.replace(/([^>])\n/g, '$1<br/>')}}), 
	          React.createElement("h3", {className: "objects__block-title"}, "Описание (список объектов на странице \"Объекты\")"), 
	          React.createElement("div", {className: "services__item__description", dangerouslySetInnerHTML: {__html: this.props.description.replace(/([^>])\n/g, '$1<br/>')}}), 
	          React.createElement("h3", {className: "objects__block-title"}, "Полное описание"), 
	          React.createElement("div", {className: "services__item__description", dangerouslySetInnerHTML: {__html: this.props.fullDescription.replace(/([^>])\n/g, '$1<br/>')}}), 
	          React.createElement("h3", {className: "objects__block-title"}, "Общие характеристики"), 
	          React.createElement("div", {className: "services__item__description"}, 
	            _.map(this.props.summary, function(item, index){
	              return(
	                React.createElement("div", {key: index}, item)
	              )
	            })
	          )
	        ), 
	        React.createElement("div", {className: formClass}, 
	          React.createElement("div", {className: imageClass}, 
	            React.createElement("div", {className: "objects__images"}, 
	              _.map(this.state.images, function(image, index){
	                var style = {backgroundImage: 'url(' + Settings.filesPath + image + ')'};
	                return(
	                  React.createElement("div", {className: "objects__image", key: index, style: style})
	                )
	              })
	            ), 
	            React.createElement("div", {className: "services__item__actions"}, 
	              React.createElement("span", {className: "button blue inline", onClick: this.changeImage}, "Изменить")
	            )
	          ), 
	          React.createElement("input", {type: "file", multiple: "true", className: imageEditClass, ref: "image", onChange: this.addImages}), 
	          React.createElement("div", {className: "clear"}), 
	          React.createElement("input", {type: "text", className: "form__field", value: this.state.title, placeholder: "Название объекта", onInput: this.changeTitle, onChange: this.changeTitle}), 
	          React.createElement("textarea", {className: "form__field form__field-textarea", placeholder: "Короткое описание для блока на главной", value: this.state.text, onInput: this.changeDescr, onChange: this.changeDescr}), 
	          React.createElement("span", {className: "button orange inline", onClick: this.save}, "Сохранить"), 
	          React.createElement("span", {className: "button blue inline", onClick: this.save}, "Отменить")
	        )
	      )
	    )
	  }
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  maxLength: function(val, max){
	    if(val.length <= max){
	      return true;
	    }
	    return false;
	  }
	}

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	var Validator = __webpack_require__(25)
	  , Uploader = __webpack_require__(22);
	
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState: function(){
	    return {
	      _id: this.props._id,
	      image: this.props.image,
	      title: this.props.title,
	      text: this.props.text,
	      onMainPage: this.props.onMainPage
	    }
	  },
	  addImage: function(){
	    var files = this.refs.image.getDOMNode().files
	      , self = this;
	
	    var file = Uploader.addFiles(files);
	
	    if(file[0].valid){
	      setTimeout(function(){self.setState({image: file[0].name})}, 5000);
	    }
	  },
	  changeImage: function(){
	    this.setState({image: false});
	    this.refs.image.getDOMNode().value = '';
	  },
	  changeTitle: function(e){
	    var title = e.target.value;
	    if(Validator.maxLength(title, 100)){
	      this.setState({title: title});
	    }
	    else{
	      e.preventDefault();
	    }
	  },
	  changeDescr: function(e){
	    var text = e.target.value;
	    if(Validator.maxLength(text, 700)){
	      this.setState({text: text});
	    }
	    else{
	      e.preventDefault();
	    }
	  },
	  makeEditable: function(){
	    this.props.makeEditable(this.props._id);
	  },
	  save: function(){
	    this.props.save(this.state);
	  },
	  cancelEdit: function(){
	    this.getInitialState();
	    this.props.cancelEditing();
	  },
	  toggleMain: function(){
	    this.props.onMain(this.props._id);
	  },
	  render: function(){
	    var cx = React.addons.classSet
	      , viewClass = cx({
	        'view': true,
	        'hidden': this.props.editing
	      })
	      , formClass = cx({
	        'form': true,
	        'hidden': !this.props.editing
	      })
	      , mainPageClass = cx({
	        'button orange inline': true,
	        'active': this.props.onMainPage,
	        'disabled': !this.props.onMainPage && this.props.disableMainPage
	      })
	      , imageClass = cx({
	        'services__item__image-edit': true,
	        'hidden': !this.state.image
	      })
	      , imageEditClass = cx({
	        'form__field': true,
	        'hidden': this.state.image
	      });
	    return(
	      React.createElement("div", {className: "services__item"}, 
	        React.createElement("div", {className: viewClass}, 
	          React.createElement("img", {src: Settings.filesPath + this.props.image, className: "services__item__image"}), 
	          React.createElement("div", {className: "services__item__actions"}, 
	            React.createElement("span", {className: "button blue inline", onClick: this.makeEditable}, "Редактировать"), 
	            React.createElement("span", {className: "button orange inline"}, "Удалить"), 
	            React.createElement("br", null), 
	            React.createElement("span", {className: mainPageClass, onClick: this.toggleMain}, "Показывать на главной")
	          ), 
	          React.createElement("div", {className: "clear"}), 
	          React.createElement("div", {className: "services__item__title"}, this.props.title), 
	          React.createElement("div", {className: "services__item__description", dangerouslySetInnerHTML: {__html: this.props.text.replace(/([^>])\n/g, '$1<br/>')}})
	        ), 
	        React.createElement("div", {className: formClass}, 
	          React.createElement("div", {className: imageClass}, 
	            React.createElement("img", {src: Settings.filesPath + this.state.image, className: "services__item__image", onChange: this.addImage}), 
	            React.createElement("div", {className: "services__item__actions"}, 
	              React.createElement("span", {className: "button blue inline", onClick: this.changeImage}, "Изменить")
	            )
	          ), 
	          React.createElement("input", {type: "file", multiple: "false", className: imageEditClass, ref: "image", onChange: this.addImage}), 
	          React.createElement("div", {className: "clear"}), 
	          React.createElement("input", {type: "text", className: "form__field", value: this.state.title, placeholder: "Название услуги", onInput: this.changeTitle, onChange: this.changeTitle}), 
	          React.createElement("textarea", {className: "form__field form__field-textarea", placeholder: "Описание услуги", value: this.state.text, onInput: this.changeDescr, onChange: this.changeDescr}), 
	          React.createElement("span", {className: "button orange inline", onClick: this.save}, "Сохранить"), 
	          React.createElement("span", {className: "button blue inline", onClick: this.save}, "Отменить")
	        )
	      )
	    )
	  }
	});

/***/ }
]);
//# sourceMappingURL=admin.bundle.js.map