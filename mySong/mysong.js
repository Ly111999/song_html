var MY_SONG_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-mine";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var objSong = JSON.parse(xhttp.responseText);

        var content = '';
        for (var i = 0; i < objSong.length; i++) {
            var itemSong = '  <div class="mp3-item">\n' +
                '        <div class="col-2 stt">' + (i + 1) + '</div>\n' +
                '        <div class="col-3 thumbnail">\n' +
                '            <img onclick="GetSong(\'' + objSong[i].link + '\')" width="100px" height="70px" src="' + objSong[i].thumbnail + '" alt="">\n' +
                '        </div>\n' +
                '        <div class="col-5">\n' +
                '            <div class="song-name">' + objSong[i].name + '</div>\n' +
                '            <div class="song-singer">' + objSong[i].singer + '</div>\n' +
                '        </div>\n' +
                '        <div class="col-2 action-btn">' +
                '           <div onclick="GetSong(\'' + objSong[i].link + '\')"><i class="fas fa-play" title="Play" aria-hidden="true"></i></div>' +
                '           <div><i class="fa fa-download" title="Download" aria-hidden="true"></i></div>' +
                '           <div><i class="fa fa-share-alt" title="Share" aria-hidden="true"></i></div>' +
                '       </div>\n' +
                '    </div>';
            content += itemSong;
        }
        document.getElementById('mp3').innerHTML = content;
    }
};
xhttp.open("GET", MY_SONG_API, true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('token'));
xhttp.send();

function GetSong(srcSong) {
    var play = document.getElementById('play');
    play.src = srcSong;

}
