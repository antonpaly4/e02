var React = require('react');

var Projects = require('../components/projects/admin.jsx');

module.exports = React.createClass({
  render: function(){
    return(
      <div className="wrapper content">
        <Projects />
      </div>
    )
  }
});