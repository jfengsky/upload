# Description:
# Author: jiangfeng(jiang.f@ctrip.com)
# Date: 2014-07-23 21:05

define (require, exports, module) ->
  "use strict"
  $ = require('jquery')
  doc = document
  Upload = ->


  Upload:: =

    ###
     * 上传文件
    ###
    _updata: (_data, _callback) ->
      $.ajax
        url: 'upload.php'
        type: 'post'
        data: _data
        processData: false
        contentType: false
        sucdess: (_res) ->
          _callback _res



    ###
     * 处理文件
     * @param {Array} _files 上传的文件数组
    ###
    _checkFiles: (_files) ->
      formData = new FormData()
      $.each _files, (_index, _item) ->
        console.log _item
        formData.append('images[]', _item)
      this._updata formData, (data) ->
        console.log(data)
      return

    ###
     * 文件选择按钮绑定事件
     * @param {String} _id  文件选择按钮
    ###
    _bind: (_id) ->
      self = this
      $(doc).delegate _id, 'change', (ev) ->
        files = ev.target.files
        self._checkFiles files
        return
      return

    ###
     * 初始化
     * @param {String} _id  文件选择按钮
     * @return 
    ###
    init: (_id)->
      this._bind(_id)
      return

  module.exports = Upload
  return