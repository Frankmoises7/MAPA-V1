async function mapController() {


const map = L.map("map").setView([-33.45694, -70.64827], 9);
//Formato del Mapa
const tileURL = "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png";


L.tileLayer(tileURL).addTo(map);

let lugares = [
  {
    coords: [-33.45694, -70.64827],
    text: {
      name: "Lugares",
      email: "email"
    }
  }
]

lugares.forEach(element => {
  L.marker(element.coords)
    .addTo(map)
    .bindPopup(element.text.email)
    .openPopup();
});

map.locate({enableHighAccuracy: true})


const searchControl = L.esri.Geocoding.geosearch({
  providers: [
    L.esri.Geocoding.arcgisOnlineProvider({
      // API Key to be passed to the ArcGIS Online Geocoding Service
      apikey:
        "AAPKd3545a25fb184a6b88b37bbc39f3bafckzMf-UqXugJwfEowc0JboisMqlPIokptKpcIihMX6i8oey67aOllVl4yfGFo_Xpz",
    }),
  ],
}).addTo(map);

// create an empty layer group to store the results and add it to the map
const results = L.layerGroup().addTo(map);

// listen for the results event and add every result to the map
searchControl.on("results", function (data) {
  results.clearLayers();
  for (var i = data.results.length - 1; i >= 0; i--) {
    results.addLayer(
      L.marker(data.results[i].latlng)
        .bindPopup(data.results[i].text)
        .openPopup()
    );
    console.log(data.results[i].text)
  }
});

}
module.exports = mapController