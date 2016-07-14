function getLocations() {

    $.getJSON("http://localhost:1117/zones/latlng", function (json) {

        var location;


        $.each(json.zones, function (i, item) {
            addMarker(item.Latitude,item.Longitude);
        });

    });
}

function addMarker(lat,lng) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat,lng),
            map: map,
            icon: redImage
        });
        markersArray.push(marker);
}
