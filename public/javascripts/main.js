/**
 * Description: 上传组件配置文件
 * Author: jiangfeng(jiang.f@ctrip.com)
 * Date: 2014-05-27 17:01
 *
 */

define(function (require) {
  "use strict";
  var upload = require('./upload');
  new upload('#test',{
    multi: true
  }).init();
});