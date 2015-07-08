var React = require('react')
  , _ = require('underscore');

var Server = require('../server');

module.exports = React.createClass({
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
      <div className="widget">
        <h3>Слайдер</h3>
        <a className="button orange add" href="/admin/slider/add">Добавить слайд</a>
        <div className="slider">
          {_.map(this.state.slides, function(slide, index){
            var text = slide.description.replace(/([^>])\n/g, '$1<br/>');
            return(
              <div className="slider__item" key={index}>
                <img src={Settings.filesPath + slide.image} className="slider__image"/>
                <div className="slider__description">
                  <div className="slider__title">{slide.title}</div>
                  <div className="slider__text" dangerouslySetInnerHTML={{__html: text}} />
                </div>
                <div className="slider__item-clear"/>
                <div className="slider__item__actions">
                  <a className="button blue inline" href={'/admin/slider/edit/' + slide._id}>Редактировать</a>
                  <span className="button orange inline" onClick={self.deleteSlide.bind(null, slide._id)}>Удалить</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
});