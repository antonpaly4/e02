var React = require('react')
  , _ = require('underscore');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      currentActive: this.props.currentActive,
      items: [
        {
          type: 'all',
          title: 'Все работы'
        },
        {
          type: 'key',
          title: 'Под ключ'
        },
        {
          type: 'projects',
          title: 'Проектирование'
        },
        {
          type: 'smartgrid',
          title: 'Smart Grid'
        }
      ]
    };
  },
  componentWillReceiveProps: function(props){
    this.setState({currentActive: props.currentActive})
  },
  switchItems: function(type){
    this.props.switchType(type);
  },
  render: function(){
    var self = this;
    return(
      <div className="projects__header">
        <div className="wrapper projects__header-content">
          <a className="projects__header-title" href="#/objects">Последние объекты</a>
          <nav className="projects__header__menu">
            <ul>
              {_.map(this.state.items, function(item, i){
                var cx = React.addons.classSet
                  , classes = cx({
                    'projects__header__menu-item__link': true,
                    'active': self.state.currentActive == item.type
                  });
                return(
                  <li className="projects__header__menu-item" key={i}>
                    <span className={classes} onClick={self.switchItems.bind(null, item.type)}>{item.title}</span>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    )
  }
});