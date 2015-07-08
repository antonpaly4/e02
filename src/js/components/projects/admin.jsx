var React = require('react')
  , _ = require('underscore');

var Item = require('./edit.jsx');

var Server = require('../server');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      objects: [],
      edit: null,
      disableMainPage: false
    };
  },
  componentWillMount: function(){
    var self = this;

    Server.get('objects').done(function(data){
      self.setState({objects: data});

      self.disableMainPage();
    })
  },
  disableMainPage: function(){
    var onMain = _.where(this.state.services, {onMainPage: true});
    if(onMain.length >= 3){
      this.setState({disableMainPage: true});
    }
    else{
      this.setState({disableMainPage: false});
    }
  },
  setEditing: function(id){
    this.setState({edit: id});
  },
  getEditingIndex: function(id){
    var objects = this.state.objects
      , project = _.findWhere(objects, {_id: id || this.state.edit});
    return _.indexOf(objects, project);
  },
  saveItem: function(item){
    var objects = this.state.objects
      , index = this.getEditingIndex()
      , self = this;

    Server.update('objects', this.state.edit, item).done(function(data){
      objects[index] = item;
      self.setState({
        edit: null,
        objects: objects
      });
    });
  },
  toggleMainPage: function(id){
    var objects = this.state.objects
      , index = this.getEditingIndex(id)
      , self = this;

    if(this.state.disableMainPage && !objects[index].onMainPage){
      return false;
    }

    objects[index].onMainPage = !objects[index].onMainPage;
    this.setState({objects: objects});
    Server.update('objects', id, objects[index]).done(function(data){
      self.disableMainPage();
    });
  },
  cancelEditing: function(){
    this.setState({edit: null});
  },
  render: function(){
    var self = this;

    return(
      <div className="widget">
        <h3>Объекты</h3>
        <a className="button orange add" href="/admin/objects/add">Добавить объект</a>
        <div className="services">
          {_.map(this.state.objects, function(object, index){
            return(
              <Item key={index}
                    editing={self.state.edit == object._id}
                    makeEditable={self.setEditing}
                    disableMainPage={self.state.disableMainPage}
                    save={self.saveItem}
                    onMain={self.toggleMainPage}
                {...object} />
            )
          })}
        </div>
      </div>
    )
  }
});