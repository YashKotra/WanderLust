mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container :'map', 
    center: listing.geometry.coordinates,
    zoom: 9 
});
const el = document.createElement('img');
el.src = "https://www.shutterstock.com/image-vector/compass-vector-icon-red-symbol-260nw-2064101375.jpg";
el.style.width = '50px';  // customize size
el.style.height = '50px';

const marker1 = new mapboxgl.Marker(el)
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset:25})
        .setHTML(`<h4>${listing.title}</h4> <p>Exact Location will be provided after Booking</p>`))
    .addTo(map);
