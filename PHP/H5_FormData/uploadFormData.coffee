# Description:
# Author: jiangfeng(jiang.f@ctrip.com)
# Date: 2014-07-21 22:29
define (require, exports, module) ->
  "use strict";
  $ = require("jquery")
  doc = document
  ###
   * 创建上传对象
  ###
  Upload = ->
  console.log($)
  Upload:: =

    ###
     * 给上传按钮绑定事件
     * @param {String} _id 上传按钮对象
     * @return
    ###
    _bind: (_id)->
      $(doc).delegate _id, 'change', (_e)->
        console.log _e
        return
      return


    ###
     * 初始化
     * @param {String} _id 上传按钮对象
     * @return
    ###
    init: (_id)->
      this._bind _id
      return


  module.exports = Upload
  return