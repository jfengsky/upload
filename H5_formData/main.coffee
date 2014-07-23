# Description:
# Author: jiangfeng(jiang.f@ctrip.com)
# Date: 2014-07-21 23:41

define (require) ->
  "use strict";
  $ = require("jquery")
  upload = require("./upload")
  new upload().init('#J_upload')
  return