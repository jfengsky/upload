function fileDialogComplete(numFilesSelected, numFilesQueued) {
  console.log("file_dialog_complete_handler");
  this.startUpload();
}

function uploadComplete(file) {
  if (this.getStats().files_queued === 0) {
    console.log('upload Complete!');
  }
}


