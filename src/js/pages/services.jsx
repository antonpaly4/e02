var React = require('react');

var Page = require('../components/services/page.jsx');

module.exports = React.createClass({
  render: function(){
    return (
      <Page openPopup={this.props.onPopup} />
    );
  }
});