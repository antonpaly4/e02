var React = require('react');

module.exports = React.createClass({
  render: function(){
    return(
      <div className="statistic-home">
        <div className="statistic-home__wrapper">
          <div className="wrapper columns">
            <div className="column column-s statistic-home__item statistic-home__item-objects">
              <div className="statistic-home__item__text">
                <span className="statistic-home__item__text-data">130</span><br/>
                законченных объектов
              </div>
            </div>
            <div className="column column-s statistic-home__item statistic-home__item-personal">
              <div className="statistic-home__item__text">
                <span className="statistic-home__item__text-data">769</span><br/>
                квалифицированных сотрудников
              </div>
            </div>
            <div className="column column-s statistic-home__item statistic-home__item-partners">
              <div className="statistic-home__item__text">
                <span className="statistic-home__item__text-data">12</span><br/>
                компаний-партнеров
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});