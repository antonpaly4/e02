var React = require('react')
  , _ = require('underscore');

var IMAGE_PATH = '/public/img/layout/';

module.exports = React.createClass({
  render: function(){
    return(
        <div className="wrapper content columns">
          {_.map(this.props, function(service, i) {
            return(<div className="column column-s services__item" key={i}>
              <img className="services__image" src={IMAGE_PATH + service.image} alt={service.title}/>
              <h2 className="services__title">{service.title}</h2>
              <div className="services__description" dangerouslySetInnerHTML={{__html: service.text}}/>
            </div>
            )})
          }
        </div>
    )
  }
});