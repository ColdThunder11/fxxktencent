// ==UserScript==
// @name         腾讯网址拦截重定向
// @version      0.1
// @description  腾讯网址拦截重定向
// @author       ColdThunder11
// @match        https://c.pc.qq.com/middlem.html*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == "pfurl") {
            console.log(decodeURIComponent(pair[1]))
            window.location.href=decodeURIComponent(pair[1])
        }
    }
})();
