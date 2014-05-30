<!DOCTYPE html>
<html>
<head>
<title>SWFUpload Demos - SWFObject Demo</title>
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

<script type="text/javascript" src="js/vacation_global.min.js"></script>
<script>
seajs.config({
    base: './',
    map: [
        [/^(.*\.(?:css|js))(.*)$/i, '$1?ver=2014-05-30-785']
    ],
    alias: {
        jquery: 'js/jquery-1.10.2.min'
    },
    charset: 'utf-8'
});
seajs.use('js/main');
</script>
</body>
</html>
