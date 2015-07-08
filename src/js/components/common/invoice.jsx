var React = require('react');

module.exports = React.createClass({
  closePopup: function(){
    this.props.togglePopup();
  },
  render: function(){
    return(
      <div className="invoice">
        <div className="invoice-wrapper">
          <div className="invoice-holder">
            <div className="invoice__popup">
              <div className="invoice__popup-header">
                <h3>Отправить заявку</h3>
              </div>
              <div className="invoice__popup-content">
                <input className="invoice__popup__field" placeholder="Название организации"/>
                <input className="invoice__popup__field" placeholder="Телефон"/>
                <input className="invoice__popup__field" placeholder="Email"/>
                <input className="invoice__popup__field" placeholder="Контактное лицо"/>
                <textarea className="invoice__popup__field invoice__popup__field-textarea" placeholder="Опишите необходимые услуги"></textarea>
                <div className="invoice__popup-actions">
                  <span className="button blue inline">Отправить</span>
                  <span className="button orange inline" onClick={this.closePopup}>Закрыть</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})