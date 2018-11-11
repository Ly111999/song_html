var CREATE_SONG_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs";
var btnCreate = document.forms["form-create-song"]["btn-submit"];
if (btnCreate != null){
    btnCreate.onclick = function () {
        var txtName = document.forms["form-create-song"]["name"];
        var txtThumbnail = document.forms["form-create-song"]["thumbnail"];
        var txtDescription = document.forms["form-create-song"]["description"];
        var txtSinger = document.forms["form-create-song"]["singer"];
        var txtAuthor = document.forms["form-create-song"]["author"];
        var txtLink = document.forms["form-create-song"]["link"];

        var jsSong = {
            name : txtName.value,
            thumbnail : txtThumbnail.value,
            description : txtDescription.value,
            singer : txtSinger.value,
            author : txtAuthor.value,
            link : txtLink.value
        }
        var jsDataSong = JSON.stringify(jsSong);
        doCreateSong(jsDataSong);
    }
}

function doCreateSong(JsDataSong) {
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201){
            var song = JSON.parse(xHttp.responseText);
            alert("Success");
        }
    }
    xHttp.open("POST", CREATE_SONG_API, true);
    xHttp.setRequestHeader("Content-type", "application/json");
    xHttp.setRequestHeader('Authorization','Basic ' + localStorage.getItem('token'));
    xHttp.send(JsDataSong);
}