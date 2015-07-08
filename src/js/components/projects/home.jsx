var React = require('react')
  , _ = require('underscore')
  , $ = require('jquery');

var Header = require('./header.jsx');

var Server = require('../server');

module.exports = React.createClass({
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
      <div className="home-projects">
        <Header switchType={this.switchType} {...this.state}/>
        <div className="wrapper content">
          <div className="home-projects__gallery">
            {_.map(this.state.projects, function(project, i){
              var cx = React.addons.classSet
                , classes = cx({
                  'home-projects__gallery-item': true,
                  'hidden': self.state.currentActive !== 'all' ? self.state.currentActive !== project.type : false
                });

              return(
                <div className={classes} key={i}>
                  <img src={Settings.filesPath + project.images[0]} className="home-projects__gallery-item__image"/>
                  <div className="home-projects__gallery-item__description">
                    <h3 className="home-projects__gallery-item__description-title">{project.title}</h3>
                    <p className="home-projects__gallery-item__description-text" dangerouslySetInnerHTML={{__html: project.shortDescription}}/>
                    <a href={"/objects/" + project.link} className="button orange">Подробнее</a>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    )
  }
});