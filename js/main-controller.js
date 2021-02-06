'use strict'


function onInit(){

    var userPrefs = getUserPrefs();
    setUserPrefs(userPrefs)
}

function setUserPrefs(userPrefs){
    var {bgc, txtColor} = userPrefs;
    $('body').css("background-color", bgc)
    $('body').css("color", txtColor)
}
