
encode();

function encode() {
    var selectedfile = new Blob(document.getElementById("imatge").files);
    console.log(selectedfile);
/*     if (selectedfile.length > 0) {
      var imageFile = selectedfile[0];
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result;
        var newImage = document.createElement('img');
        newImage.src = srcData;
        //document.getElementById("dummy").innerHTML = newImage.outerHTML;
        //document.getElementById("txt").value = document.getElementById("dummy").innerHTML;
      }
      fileReader.readAsDataURL(imageFile);
    } */
  }

  