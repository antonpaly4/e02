var React = require('react')
  , _ = require('underscore');

var Server = require('../server');

module.exports = React.createClass({
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
      <div className="page">
        <div className="page__cover projects-cover">
          <div className="page__cover-overlay">
            <div className="wrapper page__title-wrapper">
              <h2 className="page__title">{this.state.title}</h2>
            </div>
          </div>
        </div>
        <div className="wrapper project-details">
          <div className="project-details__top">
            <div className="project-details__summary">
              <h4 className="project-details__summary-title">Общая информация</h4>
              {_.map(this.state.summary, function(item, index){
                return(
                  <p className="project-details__summary-item" key={index}>{item}</p>
                )
              })}
            </div>
            <div className="project-details__photos">
              <div className="project-details__photos__photo project-details__photos__photo-main" style={mainPhoto}></div>
              <div>
                {_.map(photos, function(photo, index){
                  var style = {backgroundImage: 'url(/public/img/projects/photos/' + photo + ')'};
                  return(
                    <div className="project-details__photos__photo project-details__photos__photo-small" style={style} key={index}></div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="project-details__description">
            <h4 className="project-details__description-title">Описание</h4>
            <p dangerouslySetInnerHTML={{__html: this.state.fullDescription}}/>
          </div>
        </div>
      </div>
    )
  }
});