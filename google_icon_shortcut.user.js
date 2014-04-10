// ==UserScript==
// @name        gmail_icon_shortcut
// @namespace   rpds
// @include     https://mail.google.com/mail/u/*
// @version     1
// @grant       none
// ==/UserScript==

var viewPidList = {
    25: true,
    24: true
}
function setIcon() {
    var loading = document.getElementById('loading');
    if (loading == null) {
        return false;
    }
    if (document.getElementById('loading') .style.display != 'none') {
        window.setTimeout(setIcon, 100);
        return false;
    }
    var iconList = document.querySelectorAll('li.gb_k a');
    
    var div = document.querySelector('div.gb_oa'); //write classname unique classname in [min-width:270] div element 
    
    var icon;
    var pid;
    for (var i = 0; i < iconList.length; i++) {
        pid = iconList[i].getAttribute('data-pid');
        if (pid != undefined && viewPidList[pid] === true) {
            icon = iconList[i].cloneNode();
            icon.querySelector('span.gb_o') .remove();
            div.insertBefore(icon, div.firstChild);
        }
    }
}
setIcon();
