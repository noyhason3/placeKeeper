


function onSubmit(ev){
    ev.preventDefault();

    var bgc = $('#bgc').val();
    var txtColor = $('#txt-color').val()
    var age = $('#age').val()
    var birthDate = $('#birth-date').val()
    var birthTime = $('#birth-time').val()
    var email = $('#email').val()

    var data = {
        bgc,
        txtColor,
        age,
        birthDate,
        birthTime,
        email,
    }

    saveUserData(data)
}