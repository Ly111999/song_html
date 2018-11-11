var REGISTER_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/members';
var LOGIN_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication';

var btnSubmit = document.forms['form-register']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtFirstName = document.forms['form-register']['firstName'];
        var txtLastName = document.forms['form-register']['lastName'];
        var pwdPassword = document.forms['form-register']['password'];
        var txtAddress = document.forms['form-register']['address'];
        var txtPhone = document.forms['form-register']['phone'];
        var txtAvatar = document.forms['form-register']['avatar'];
        var rGender = document.querySelector('input[name="gender"]:checked').value;
        var txtEmail = document.forms['form-register']['email'];
        var txtBirthday = document.forms['form-register']['birthday'];
        var dateFormat = new Date(txtBirthday.value);
        var dateBirth = dateFormat.getFullYear() + '-' + (dateFormat.getMonth() + 1) + '-' + (dateFormat.getDate() < 10 ? '0' + dateFormat.getDate() : dateFormat.getDate());

        if (txtFirstName != null && txtLastName != null) {
            var firstName = txtFirstName.value;
            var lastName = txtLastName.value;
            var passWord = pwdPassword.value;
            var address = txtAddress.value;
            var phone = txtPhone.value;
            var avatar = txtAvatar.value;
            var gender = rGender;
            var email = txtEmail.value;
            var birth = dateBirth;

            var jsMember = {
                firstName: firstName,
                lastName: lastName,
                password: passWord,
                address: address,
                phone: phone,
                avatar: avatar,
                gender: gender,
                email: email,
                birth: birth,
            }
            var jsonData = JSON.stringify(jsMember);
            postRegisterDate(jsonData);
        }
    }
}

function postRegisterDate(jsonData) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var member = JSON.parse(xhttp.responseText);
        }
    }
    xhttp.open('POST', REGISTER_API, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(jsonData);
}



