let map;

function initMap(lat = 29.55805, lng = 34.94821) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat, lng },
    zoom: 16,
  });
  console.log('Map is ready');
}

function setCenter() {
  navigator.geolocation.getCurrentPosition((position) => {
    if (!navigator.geolocation) {
      alert('HTML5 Geolocation is not supported in your browser.');
      return;
    }

    const pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    initMap(pos.lat, pos.lng);
  });
}

// google.maps.event.addListener(map, 'click', function(event){
//     let latitude = event.latLng.lat();
//     let longitude = event.latLng.lng()
//     let placeName = prompt('place\'s name:')
//     console.log(placeName,latitude, longitude);
//   });

google.maps.event.addListener(map, 'click', function (event) {
  alert(event.latLng.lat() + ', ' + event.latLng.lng());
});
