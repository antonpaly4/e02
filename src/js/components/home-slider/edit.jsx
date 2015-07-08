var React = require('react');

var Uploader = require('../uploader/uploader')
  , Server = require('../server')
  , Validator = require('../validator');

module.exports = React.createClass({
  getInitialState: function(){
    return {};
  },
  componentWillMount: function(){
    var self = this;
    if(this.props.slideId){
      Server.getItem('slider', this.props.slideId).done(function(data){
        self.setState(data);
      })
    }
    else {
      this.setState({
        image: false,
        title: null,
        description: null
      })
    }
  },
  uploadFiles: function(){
    var field = this.refs.image.getDOMNode()
      , files = field.files
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
    if(Validator.maxLength(title, 90)){
      this.setState({title: title})
    }
    else{
      e.preventDefault();
    }
  },
  changeDesc: function(e){
    var description = e.target.value;
    if(Validator.maxLength(description, 300)) {
      this.setState({description: description});
    }
    else{
      e.preventDefault();
    }
  },
  save: function(){
    console.log(this.state);
    if(this.state._id){
      Server.update('slider', this.state._id, this.state).done(function (response) {
        window.location.href = '/admin';
      });
    }
    else {
      Server.post('slider', this.state).done(function (response) {
        window.location.href = '/admin';
      });
    }
  },
  render: function(){
    var cx = React.addons.classSet
      , imageClasses = cx({
        'slider__edit': true,
        'hidden': !this.state.image
      })
      , fileFieldClass = cx({
        'form__field': true,
        'hidden': this.state.image
      });
    return(
      <div className="form">
        <div className={imageClasses}>
          <img className="slider__edit_image" src={this.state.image ? Settings.filesPath + this.state.image : ''} />
          <div>
            <span className="button orange" onClick={this.changeImage}>Изменить картинку</span>
          </div>
        </div>
        <input className={fileFieldClass} type="file" placeholder="Изображение" multiple="false" ref="image" onChange={this.uploadFiles}/>
        <input className="form__field" type="text" onInput={this.changeTitle} onChange={this.changeTitle} placeholder="Заголовок" value={this.state.title}/>
        <textarea className="form__field form__field-textarea" onInput={this.changeDesc} onChange={this.changeDesc} placeholder="Описание" value={this.state.description}/>
        <span className="button orange" onClick={this.save}>Сохранить</span>
      </div>
    )
  }
});