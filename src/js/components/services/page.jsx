var React = require('react')
  , _ = require('underscore');

var Server = require('../server');

var ServicesList = require('./list.jsx');

module.exports = React.createClass({

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
      <div className="page">
        <div className="page__cover services-cover">
          <div className="page__cover-overlay">
            <div className="wrapper page__title-wrapper">
              <h2 className="page__title">Наши услуги</h2>
            </div>
          </div>
        </div>
        <div className="services__action">
          <span className="button blue inline" onClick={this.openPopup}>Отправить заявку</span>
        </div>
        <div className="services__list">
          {_.map(this.state.services, function(row, index){
            return(
              <ServicesList {...row} key={index} />
            )
          })}
        </div>
        <div className="services__action">
          <span className="button orange inline" onClick={this.openPopup}>Отправить заявку</span>
        </div>
      </div>
    )
  }

});