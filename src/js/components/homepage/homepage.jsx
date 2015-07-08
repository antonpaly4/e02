var React = require('react');

var Slider = require('../home-slider/slider.jsx')
  , Banner = require('../home-banner/banner.jsx')
  , Services = require('../services/home.jsx')
  , Projects = require('../projects/home.jsx')
  , Priority = require('./priority.jsx')
  , Statistic = require('./statistic.jsx')
  , Partners = require('./partners.jsx')
  , Map = require('./map.jsx');

module.exports = React.createClass({
  getInitialState: function(){
    return {};
  },
  componentWillMount: function(){



  },
  render: function(){

    return(
      <div className="page">
        <Slider />
        <Banner openPopup={this.props.onPopup} />
        <Services />
        <Projects />
        <Priority />
        <Statistic />
        <Partners />
        <Map />
      </div>
    )

  }
});