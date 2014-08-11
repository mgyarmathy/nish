var nish = require('./nish');

window.onload = function() {
    nish();

    var element = document.getElementById('rhyme');
    var bish = document.getElementById('bish');
    var kendrick = document.getElementById('kendrick');
    GifLinks( element, { preload: true } );

    var widget = SC.Widget(kendrick);

    element.addEventListener( 'mouseover',  function() { widget.play(); bish.style.display = 'inline'; kendrick.style.display = 'block'; }, false);
    element.addEventListener( 'touchstart', function() { widget.play(); bish.style.display = 'inline'; kendrick.style.display = 'block';}, false);
 };



