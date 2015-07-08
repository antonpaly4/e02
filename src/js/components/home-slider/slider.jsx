var React = require('react')
  , _ = require('underscore')
  , $ = require('jquery');

var Server = require('../server');

var Slider = React.createClass({
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
      <div className="home-slider">
        {_.map(this.state.slides, function(item, index){
          var style = {'backgroundImage': 'url(' + Settings.filesPath + item.image + ')'}
            , text = item.description.replace(/([^>])\n/g, '$1<br/>');
          return (
            <div className="home-slider__image js-home-slide" style={style} key={index}>
              <div className="home-slider__text js-slide-text">
                <h3 className="home-slider__text-title">{item.title}</h3>
                <div className="home-slider__text-descripton" dangerouslySetInnerHTML={{__html: text}} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = Slider;