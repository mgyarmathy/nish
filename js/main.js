var nish = require('./nish');

window.onload = function() {
    nish();

    var element = document.getElementById('rhyme');
    var bish = document.getElementById('bish');
    GifLinks( element, { preload: true } );

    var widget = SC.Widget(document.getElementById('kendrick'));

    element.addEventListener( 'mouseover',  function() { widget.play(); bish.style.display = 'inline'; }, false );
    element.addEventListener( 'touchstart', function() { widget.play(); bish.style.display = 'inline'; }, false);
    element.addEventListener( 'mouseout',     function() { widget.pause(); }, false);
    element.addEventListener( 'touchmove',    function( event ) { event.preventDefault(); widget.pause(); }, false);
    element.addEventListener( 'click',        function() { widget.pause(); }, false);
    element.addEventListener( 'dblclick',     function() { widget.pause(); }, false);

 };



