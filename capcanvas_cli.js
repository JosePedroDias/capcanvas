(function() {

    'use strict';


    var requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                function(cb){
                    window.setTimeout(cb, 1000 / 60);
                };
    })();


    var ajax = function(uri, data) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', uri, true);
        xhr.send(data);
    };


    window.capcanvas = function(canvasEl, srvUrl, skip) {

        var n = skip;

        var cb = function() {

            if (n === 0) {
                var imgBase64 = canvasEl.toDataURL('image/png');
                ajax(srvUrl, imgBase64);
                n = skip;
            }
            else {
                --n;
            }

            requestAnimFrame(cb);
        };

        requestAnimFrame(cb);
    };

})();
