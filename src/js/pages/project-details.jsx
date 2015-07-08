var React = require('react');

var Page = require('../components/projects/details.jsx');

module.exports = React.createClass({
  componentWillMount: function(){
    this.objectId = this.props.params.objectId;
  },
  objectId: null,
  render: function(){
    return (
      <Page objectId={this.objectId}/>
    );
  }
});