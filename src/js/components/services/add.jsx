var React = require('react');

var Validator = require('../validator')
  , Uploader = require('../uploader/uploader')
  , Server = require('../server');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      image: false,
      title: null,
      text: null,
      onMainPage: false
    }
  },
  addImage: function(){
    var files = this.refs.image.getDOMNode().files
      , self = this;

    var file = Uploader.addFiles(files);

    if(file[0].valid){
      setTimeout(function(){self.setState({image: file[0].name})}, 5000);
    }
  },
  changeImage: function(){
    this.setState({image: false});
    this.refs.image.getDOMNode().value = '';
  },
  changeTitle: function(e){
    var title = e.target.value;
    if(Validator.maxLength(title, 100)){
      this.setState({title: title});
    }
    else{
      e.preventDefault();
    }
  },
  changeDescr: function(e){
    var text = e.target.value;
    if(Validator.maxLength(text, 700)){
      this.setState({text: text});
    }
    else{
      e.preventDefault();
    }
  },
  save: function(){
    Server.post('services', this.state.edit, this.state).done(function(data){
      window.location.href = '/admin/services';
    });
  },
  cancelEdit: function(){
    window.location.href = '/admin/services';
  },
  render: function(){
    var cx = React.addons.classSet
      , imageClass = cx({
        'services__item__image-edit': true,
        'hidden': !this.state.image
      })
      , imageEditClass = cx({
        'form__field': true,
        'hidden': this.state.image
      });
    return(
      <div className="services__item">
        <div className="form">
          <div className={imageClass}>
            <img src={Settings.filesPath + this.state.image} className="services__item__image" onChange={this.addImage} />
            <div className="services__item__actions">
              <span className="button blue inline" onClick={this.changeImage}>Изменить</span>
            </div>
          </div>
          <input type="file" multiple="false" className={imageEditClass} ref="image" onChange={this.addImage}/>
          <div className="clear" />
          <input type="text" className="form__field" value={this.state.title} placeholder="Название услуги" onInput={this.changeTitle} onChange={this.changeTitle}/>
          <textarea className="form__field form__field-textarea" placeholder="Описание услуги" value={this.state.text} onInput={this.changeDescr} onChange={this.changeDescr} />
          <span className="button orange inline" onClick={this.save}>Сохранить</span>
          <a className="button blue inline" href="/admin/services">Отменить</a>
        </div>
      </div>
    )
  }
});