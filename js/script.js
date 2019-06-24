// ===================== 10.2 - wąs: ========================================

'use strict';

var map;

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

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
});

flkty.on('select', function(i) {
    map.panTo(slideList[i].coords);
    map.setZoom(15);
});

// =====================  10.3 - mapa : ========================================

window.initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: slideList[0].coords
    });
    
    for(let i = 0; i < slideList.length; i++) {
      var marker = new google.maps.Marker({
        position: slideList[i].coords,
        map: map
      });

      marker.addListener("click", function() {
        flkty.select(i);
      });
    }
  
  };