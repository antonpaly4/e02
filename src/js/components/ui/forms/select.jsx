var React = require('react')
  , _     = require('underscore');

module.exports = React.createClass({
  selectItem: function(e){
    this.props.selectItem(e.target.value);
  },
  render: function(){
    var self = this;

    return(
      <select>
        {_.map(this.props.items, function(item, index){
          var selected = self.props.selected == item.name;
          return(
            <option value={item.name} selected={selected} key={index} onClick={self.selectItem}>{item.title}</option>
          )
        })}
      </select>
    )
  }
});