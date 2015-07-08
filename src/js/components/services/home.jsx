var React = require('react')
  , _ = require('underscore');

var ServicesList = require('./list.jsx');

var Server = require('../server');

module.exports = React.createClass({
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
      <div className="home-services">
        <ServicesList {...this.state.services}/>
        <div className="wrapper home-services__footer">
          <a href="#/services" className="button orange">Все услуги</a>
        </div>
      </div>
    );
  }
});