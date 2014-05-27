/**
 * Description: 上传组件
 * Author: jiangfeng(jiang.f@ctrip.com)
 * Date: 2014-05-27 16:55
 *
 */

// http://blog.csdn.net/sq111433/article/details/12789631

define(function (require, exports, module) {
  "use strict";
  /**
   *
   * @param {String} _id        按钮id
   * @param {Object} _options   配置参数
   *    @param {Boolean} multi     是否多文件
   *    @param {String}  fileType  文件类型('*.png;*.gif;*.jpg;*.bmp;*.jpeg')
   *    @param {Number}  limitSize 文件大小(MB)
   * @constructor
   */
  function Upload(_id, _options){
    this.id = _id;
    this._options = _options;
  }

  Upload.prototype = {

    /**
     * 初始化
     */
    init: function(){
      console.log(options);
      // 判断上传个数(单个)

    }
  };

  module.exports = Upload;
});