define(function(require) {


  function fileDialogComplete(numFilesSelected, numFilesQueued) {
    console.log("file_dialog_complete_handler");
    this.startUpload();
  }

  function uploadComplete(file) {
    if (this.getStats().files_queued === 0) {
      console.log('upload Complete!');
    }
  }


  var swfu;

 
    var settings = {
      flash_url : "../swfupload/swfupload.swf",
      upload_url: "./upload.php",
      post_params: {
        "PHPSESSID" : "NONE",
        "HELLO-WORLD" : "Here I Am",
        ".what" : "OKAY"
      },
      file_size_limit : "100 MB",
      file_types : "*.jpg;*.gif;*.png;*.jpeg;",
      file_types_description : "All Files",
      file_upload_limit : 100,
      file_queue_limit : 0,
 
      debug: true,
      // Button Settings
      button_image_url : "XPButtonUploadText_61x221.png",
      button_placeholder_id : "spanButtonPlaceholder",
      button_width: 61,
      button_height: 22,
      file_dialog_complete_handler : fileDialogComplete,
      upload_complete_handler : uploadComplete,
      minimum_flash_version : "9.0.28",

    };
    console.log(SWFUpload.onload);
    swfu = new SWFUpload(settings);

});





