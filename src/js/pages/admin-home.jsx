var React = require('react');

var Slider = require('../components/home-slider/admin-list.jsx');

module.exports = React.createClass({
  render: function(){
    return(
      <div className="wrapper content">
        <Slider />
      </div>
    )
  }
});