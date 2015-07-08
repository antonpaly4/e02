var React = require('react');

var Form = require('../components/services/add.jsx');

module.exports = React.createClass({
  render: function(){
    return(
      <div className="wrapper content">
        <div className="widget">
          <h3>Услуги</h3>
          <span className="button orange add">Добавить услугу</span>
          <Form />
        </div>
      </div>
    )
  }
});