module.exports = {
  maxLength: function(val, max){
    if(val.length <= max){
      return true;
    }
    return false;
  }
}