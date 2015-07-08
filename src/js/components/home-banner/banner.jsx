var React = require('react');

module.exports = React.createClass({
  openInvoice: function(){
    this.props.openPopup();
  },
  render: function(){
    return(
      <div className="home-banner">
        <div className="home-banner__content wrapper">
          Реализуем объекты "под ключ" от проектирования до запуска
          <span className="button orange pull-right home-banner__button" onClick={this.openInvoice}>Отправить заявку</span>
          <a className="button blue pull-right home-banner__button" href="/objects">Завершенные объекты</a>
        </div>
      </div>
    )
  }
});