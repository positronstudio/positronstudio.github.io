"use strict";

var currentYear = (new Date()).getFullYear();
var footer = document.getElementById('copyright-statement');
footer.textContent = '© ' + currentYear + ' Ioan Cristian Pavel';
