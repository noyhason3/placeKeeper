let map;

function initMap(lat= 29.55805, lng= 34.94821 ) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat, lng},
    zoom: 16,
  });
  console.log('Map is ready');
}

function setCenter() {
  navigator.geolocation.getCurrentPosition((position) => {
    const pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    initMap(pos.lat,pos.lng)
  });
}
