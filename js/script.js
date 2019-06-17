
// ===================== 10.2 : ========================================

'use strict';

(function () {

    var templateItem = document.getElementById('template-item').innerHTML;

    Mustache.parse(templateItem);

    var listItems = '';

    for (var i = 0; i < slideList.length; i++) {
        listItems += Mustache.render(templateItem, slideList[i]);
    }

    var results = document.getElementById('carousel');


    results.insertAdjacentHTML('beforeend', listItems);

})();

// =====================  (10.1) : ========================================

var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
    hash: true,
    cellAlign: "left",
    contain: true,
    pageDots: false,
});

var flkty = new Flickity('.carousel');

// Ktoś miał też:
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
});
