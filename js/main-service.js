'use strict'
const KEY = 'user-data'

function getUserPrefs(){
    var userPrefs = loadFromStorage(KEY);
    return userPrefs;
}
