
// ===================== 10.2 - wąs: ========================================

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

// =====================  10.1 - karuzela : ========================================

var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
    hash: true,
    cellAlign: "left",
    contain: true,
    pageDots: false,
});

var flkty = new Flickity('.carousel');

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
});

// =====================  10.3 - mapa : ========================================

window.initMap = function() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: slideList[0].coords
    });
    
    for(var i = 0; i < slideList.length; i++) {
      var marker = new google.maps.Marker({
        position: slideList[i].coords,
        map: map
      });
    }
  
  };