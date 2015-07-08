var React = require('react');

module.exports = React.createClass({
  render: function(){
    return(
      <div className="priority-block">
        <div className="wrapper">
          <h3 className="priority-block__title">Наши преимущества</h3>
          <div className="columns">
            <div className="column column-s">
              <div className="priority-block__icon priority-block__icon-tech"></div>
              <div className="priority-block__description">
                <h4 className="priority-block__description-title">Передовые технологии</h4>
                <p className="priority-block__description-text">Используем высокотехнологичные и самые передовые инженерные решения</p>
              </div>
            </div>
            <div className="column column-s">
              <div className="priority-block__icon priority-block__icon-eco"></div>
              <div className="priority-block__description">
                <h4 className="priority-block__description-title">Экологическая безопасность</h4>
                <p className="priority-block__description-text">Безусловно соблюдаем стандарты и правила в области природопользования, экологической безопасности и охраны окружающей среды</p>
              </div>
            </div>
            <div className="column column-s">
              <div className="priority-block__icon priority-block__icon-client"></div>
              <div className="priority-block__description">
                <h4 className="priority-block__description-title">Работа с клиентами</h4>
                <p className="priority-block__description-text">Максимально эффективно, качественно и своевременно удовлетворяем потребности наших клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});