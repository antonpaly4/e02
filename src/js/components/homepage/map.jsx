var React = require('react');

module.exports = React.createClass({
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
      <div className="home-map">
        <div className="home-map__header">Мы на карте</div>
        <div className="home-map__map" id="map"></div>
      </div>
    )
  }
});