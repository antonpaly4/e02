var React = require('react')
  , _ = require('underscore');

var Header = require('./header.jsx')
  , Server = require('../server');

var IMAGES_PATH = 'public/img/projects/photos/';

module.exports = React.createClass({
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
      <div className="page">
        <div className="page__cover projects-cover">
          <div className="page__cover-overlay">
            <div className="wrapper page__title-wrapper">
              <h2 className="page__title">Наши объекты</h2>
            </div>
          </div>
        </div>
        <Header switchType={this.switchType} {...this.state} />
        <div className="wrapper projects__list">
          {_.map(this.state.projects, function(project, i){
            var classes = cx({
                'projects__item': true,
                'projects__item-desc_left': counter%2 !== 0,
                'hidden': self.state.currentActive !== 'all' ? self.state.currentActive !== project.type : false
              })
              , style = {'backgroundImage': 'url(' + IMAGES_PATH + project.images[0] + ')'}
              , details = "/objects/" + project._id;
            counter++;
            return(
              <div className={classes} style={style} key={i}>
                <div className="projects__item__description">
                  <h4 className="projects__item__description-title">{project.title}</h4>
                  <p className="projects__item__description-text">{project.description}</p>
                  <a className="button orange" href={details}>Подробнее</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
});