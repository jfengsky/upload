/**
 * Created by jiangfeng on 14-6-1.
 * ie10以下不支持fileAPI和FormData，采用flash上传，高级浏览器采用fileApi,formData上传
 */

// 判断浏览器是否支持fileAPI和FormData
function fileSelect(ev) {
  var ev = ev || window.event,
      upfile = ev.target.files;
  getSizeType(upfile);
}

function getSizeType(_files) {
  var fileLength = _files.length;
  for(var i = 0; i < fileLength; i++){

  }
};

if(window.File){
  // 浏览器支持fileAPI
  document.getElementById('J_upload').addEventListener('change', fileSelect, false);
} else {
  // 浏览器不支持fileAPI

}