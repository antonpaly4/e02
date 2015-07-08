var React = require('react');

var Validator = require('../validator')
  , Uploader = require('../uploader/uploader');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      _id: this.props._id,
      image: this.props.image,
      title: this.props.title,
      text: this.props.text,
      onMainPage: this.props.onMainPage
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
  makeEditable: function(){
    this.props.makeEditable(this.props._id);
  },
  save: function(){
    this.props.save(this.state);
  },
  cancelEdit: function(){
    this.getInitialState();
    this.props.cancelEditing();
  },
  toggleMain: function(){
    this.props.onMain(this.props._id);
  },
  render: function(){
    var cx = React.addons.classSet
      , viewClass = cx({
        'view': true,
        'hidden': this.props.editing
      })
      , formClass = cx({
        'form': true,
        'hidden': !this.props.editing
      })
      , mainPageClass = cx({
        'button orange inline': true,
        'active': this.props.onMainPage,
        'disabled': !this.props.onMainPage && this.props.disableMainPage
      })
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
        <div className={viewClass}>
          <img src={Settings.filesPath + this.props.image} className="services__item__image" />
          <div className="services__item__actions">
            <span className="button blue inline" onClick={this.makeEditable}>Редактировать</span>
            <span className="button orange inline">Удалить</span>
            <br/>
            <span className={mainPageClass} onClick={this.toggleMain}>Показывать на главной</span>
          </div>
          <div className="clear" />
          <div className="services__item__title">{this.props.title}</div>
          <div className="services__item__description" dangerouslySetInnerHTML={{__html: this.props.text.replace(/([^>])\n/g, '$1<br/>')}} />
        </div>
        <div className={formClass}>
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
          <span className="button blue inline" onClick={this.save}>Отменить</span>
        </div>
      </div>
    )
  }
});