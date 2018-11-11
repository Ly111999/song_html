var LOGIN_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication";
var btnLogin =  document.forms["form-login"]["btn-login"];
if (btnLogin != null){
    btnLogin.onclick = function () {
        var txtEmail = document.forms["form-login"]["email"];
        var pwdPassword = document.forms["form-login"]["password"];
        var jsMember = {
            email : txtEmail.value,
            password : pwdPassword.value,
        }
        var jsData = JSON.stringify(jsMember);
        postLoginData(jsData);
    }
}
 function postLoginData(jsData) {
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 201){
             var member = JSON.parse(xhttp.responseText);
             localStorage.setItem('token', member.token);
         }
     }
     xhttp.open("POST", LOGIN_API, true);
     xhttp.setRequestHeader("Content-type", "application/json");
     xhttp.send(jsData);
 }



