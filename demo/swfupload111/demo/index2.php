<!DOCTYPE html>
<html>
<head>
<title>SWFUpload Demos - SWFObject Demo</title>
<link href="../css/default.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="../swfupload/swfupload.js"></script>
<script type="text/javascript" src="js/swfupload.swfobject.js"></script>
<script type="text/javascript" src="js/handlers.js"></script>

</head>
<body>


<div id="content">

	<form id="form1" action="index.php" method="post" enctype="multipart/form-data">
		<input type="hidden" value="111" name="test1" />
		<div id="divSWFUploadUI">
			<p id="divStatus">0 Files Uploaded</p>
			<p>
        <span id="spanButtonPlaceholder"></span>
        <span id="spanButtonPlaceholder2"></span>
				<span id="spanButtonPlaceholder3"></span>
				<!-- <input id="btnCancel" type="button" value="Cancel All Uploads" disabled="disabled" style="margin-left: 2px; height: 22px; font-size: 8pt;" /> -->
				<br />
			</p>
		</div>
	</form>
</div>
<script type="text/javascript">
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
      button_image_url : "XPButtonUploadText_61x22.png",
      button_placeholder_id : "spanButtonPlaceholder",
      button_placeholder_id : "spanButtonPlaceholder2",
      button_width: 61,
      button_height: 22,
      file_dialog_complete_handler : fileDialogComplete,
      upload_complete_handler : uploadComplete,
      minimum_flash_version : "9.0.28",

    };
    console.log(SWFUpload.onload);
    swfu = new SWFUpload(settings);

</script>
</body>
</html>
