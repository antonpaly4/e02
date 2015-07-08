var React = require('react')
  , _ = require('underscore');

var Validator = require('../validator')
  , Uploader = require('../uploader/uploader');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      _id: this.props._id,
      title: this.props.title,
      summary: this.props.summary,
      images: this.props.images,
      type: this.props.type,
      fullDescription: this.props.fullDescription,
      shortDescription: this.props.shortDescription,
      description: this.props.description,
      onMainPage: this.props.onMainPage
    }
  },
  addImages: function(){
    var files = this.refs.image.getDOMNode().files
      , self = this
      , uploaded = [];

    console.log(files);
    var file = Uploader.addFiles(files);
    console.log(file);
    for(var key in file){
      if(file[key].valid){
        uploaded.push(file[key].name);
      }
    }
    setTimeout(function(){self.setState({images: uploaded})}, 5000);
  },
  changeImage: function(){
    this.setState({images: []});
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
      this.setState({shortDescription: text});
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
        'hidden': !this.state.images.length
      })
      , imageEditClass = cx({
        'form__field': true,
        'hidden': this.state.images.length
      });
    return(
      <div className="services__item">
        <div className={viewClass}>
          <div className="objects__images">
            {_.map(this.props.images, function(image, index){
              var style = {backgroundImage: 'url(' + Settings.filesPath + image + ')'};
              return(
                <div className="objects__image" key={index} style={style} />
              )
            })}
          </div>
          <div className="objects__actions">
            <span className="button blue inline" onClick={this.makeEditable}>Редактировать</span>
            <span className="button orange inline">Удалить</span>
            <span className={mainPageClass} onClick={this.toggleMain}>Показывать на главной</span>
          </div>
          <div className="services__item__title">{this.props.title}</div>
          <h3 className="objects__block-title">Краткое описание (блок на главной)</h3>
          <div className="services__item__description" dangerouslySetInnerHTML={{__html: this.props.shortDescription.replace(/([^>])\n/g, '$1<br/>')}} />
          <h3 className="objects__block-title">Описание (список объектов на странице "Объекты")</h3>
          <div className="services__item__description" dangerouslySetInnerHTML={{__html: this.props.description.replace(/([^>])\n/g, '$1<br/>')}} />
          <h3 className="objects__block-title">Полное описание</h3>
          <div className="services__item__description" dangerouslySetInnerHTML={{__html: this.props.fullDescription.replace(/([^>])\n/g, '$1<br/>')}} />
          <h3 className="objects__block-title">Общие характеристики</h3>
          <div className="services__item__description">
            {_.map(this.props.summary, function(item, index){
              return(
                <div key={index}>{item}</div>
              )
            })}
          </div>
        </div>
        <div className={formClass}>
          <div className={imageClass}>
            <div className="objects__images">
              {_.map(this.state.images, function(image, index){
                var style = {backgroundImage: 'url(' + Settings.filesPath + image + ')'};
                return(
                  <div className="objects__image" key={index} style={style} />
                )
              })}
            </div>
            <div className="services__item__actions">
              <span className="button blue inline" onClick={this.changeImage}>Изменить</span>
            </div>
          </div>
          <input type="file" multiple="true" className={imageEditClass} ref="image" onChange={this.addImages}/>
          <div className="clear" />
          <input type="text" className="form__field" value={this.state.title} placeholder="Название объекта" onInput={this.changeTitle} onChange={this.changeTitle}/>
          <textarea className="form__field form__field-textarea" placeholder="Короткое описание для блока на главной" value={this.state.text} onInput={this.changeDescr} onChange={this.changeDescr} />
          <span className="button orange inline" onClick={this.save}>Сохранить</span>
          <span className="button blue inline" onClick={this.save}>Отменить</span>
        </div>
      </div>
    )
  }
});