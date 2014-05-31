/**
 * Created by jiangfeng on 14-5-29.
 */
define(function(require, exports, module) {

  var $ = require('jquery');

  function Upload(){

  };
  Upload.prototype = {
    /**
     * 获取文件大小
     * @private
     */
    _getSize: function(_files){
      console.log(_files[0].size)
    },
    /**
     * 获取文件类型
     * @param _files
     * @private
     */
    _getType: function(_files){
      console.log(_files[0].type);
    },
    _upFile: function(){
      $.ajax({
        url: 'upload.php',
        type: 'post',
        data: {

        },
        success: function(data){
          console.log(data);
        }
      });
    },
    init: function(){
      var self = this;
      $('#J_button').change(function(ev){
        var files = ev.target.files;
        self._getSize(files);
        self._getType(files);
        self._upFile();
      });
    }
  };
  module.exports = Upload;


});