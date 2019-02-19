"use strict"

window.onload = function() {
    
    var photos = document.getElementById('photos').children;
    console.log(photos);
    for (var i = 0; i < photos.length; i++) {
        photos[i].addEventListener("click", showBig.bind(photos[i]));
    }
    
    
    
}

function showBig() {
    
}