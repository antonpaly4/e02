var React = require('react');

var Services = require('../components/services/service-admin.jsx');

module.exports = React.createClass({
  render: function(){
    return(
      <div className="wrapper content">
        <Services />
      </div>
    )
  }
});