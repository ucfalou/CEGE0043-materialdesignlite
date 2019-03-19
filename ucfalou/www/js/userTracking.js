function trackLocation() {
L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap)
.bindPopup("<b>You were here</b>");