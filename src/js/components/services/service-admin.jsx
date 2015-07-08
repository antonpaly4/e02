var React = require('react')
  , _ = require('underscore');

var Item = require('./edit.jsx');

var Server = require('../server');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      services: [],
      edit: null,
      disableMainPage: false
    };
  },
  componentWillMount: function(){
    var self = this;

    Server.get('services').done(function(data){
      self.setState({services: data});

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
    console.log(this.state);
  },
  getEditingIndex: function(id){
    var services = this.state.services
      , service = _.findWhere(services, {_id: id || this.state.edit});
      return _.indexOf(services, service);
  },
  saveItem: function(item){
    var services = this.state.services
      , index = this.getEditingIndex()
      , self = this;

    Server.update('services', this.state.edit, item).done(function(data){
      services[index] = item;
      self.setState({
        edit: null,
        services: services
      });
    });
  },
  toggleMainPage: function(id){
    var services = this.state.services
      , index = this.getEditingIndex(id)
      , self = this;

    if(this.state.disableMainPage && !services[index].onMainPage){
      return false;
    }

    services[index].onMainPage = !services[index].onMainPage;
    this.setState({services: services});
    Server.update('services', id, services[index]).done(function(data){
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
        <h3>Услуги</h3>
        <a className="button orange add" href="/admin/services/add">Добавить услугу</a>
        <div className="services">
          {_.map(this.state.services, function(service, index){
            return(
              <Item key={index}
                    editing={self.state.edit == service._id}
                    makeEditable={self.setEditing}
                    disableMainPage={self.state.disableMainPage}
                    save={self.saveItem}
                    onMain={self.toggleMainPage}
                {...service} />
            )
          })}
        </div>
      </div>
    )
  }
});