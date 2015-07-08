var React = require('react');

var Form = require('../components/home-slider/edit.jsx');

module.exports = React.createClass({
  render: function(){
    return(
      <div className="wrapper content">
        <Form slideId={this.props.params.slideId}/>
      </div>
    )
  }
});