"use strict";

var currentYear = (new Date()).getFullYear();
var footer = document.getElementById('copyright-statement');
footer.textContent = '© ' + currentYear + ' Ioan Cristian Pavel';

var content = {
    'music': document.getElementById('content-music'),
    'software': document.getElementById('content-software'),
    'about': document.getElementById('content-about')
};

var clickHandler = function(link) {
    console.log(link, 'has been clicked');
    Object.keys(content).forEach(function(key) {
        if (key === link) {
            content[key].classList.add('active');
        } else {
            content[key].classList.remove('active');
        }
    });
};

document.getElementById('link-music').onclick = clickHandler.bind(this, 'music');
document.getElementById('link-software').onclick = clickHandler.bind(this, 'software');
document.getElementById('link-about').onclick = clickHandler.bind(this, 'about');
