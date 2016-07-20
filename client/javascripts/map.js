
var map;
var routeTaken = [{lat:42.269344, lng:-83.246391}];
var routeIdx = 0;
var routeDriven

function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: routeTaken[routeIdx],
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  routeDriven = new google.maps.Polyline({
    map: map,
    path: routeTaken,
    geodesic: true,
    strokeColor: '#C21717',
    strokeOpacity: 1.0,
    strokeWeight: 14
  });

  // routeDriven.setPath(routeTaken);
}








