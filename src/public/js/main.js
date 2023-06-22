


const map = L.map("map").setView([-33.45694, -70.64827], 9);
//Formato del Mapa
const tileURL = "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png";


L.tileLayer(tileURL).addTo(map);

let geojson_url = 'https://geobikesapi.onrender.com/api/talleres'

fetch(geojson_url)
  .then(res => res.json())
  .then(data => {
    let geojsonLayer = L.geoJSON(data, {
      onEachFeature: function(feature, layer) {
        layer.bindPopup(`
        <h5><b>${feature.properties.name}</b></h5>
        <p>${feature.properties.direccion}</p>
        `);
      }
    }).addTo(map);
    map.fitBounds(geojsonLayer.getBounds());

  })
  .catch(error => {
    console.error('Error al cargar el GeoJSON:', error);
  });




const searchControl = L.esri.Geocoding.geosearch({
  providers: [
    L.esri.Geocoding.arcgisOnlineProvider({
      // API Key to be passed to the ArcGIS Online Geocoding Service
      apikey:
        "AAPKd3545a25fb184a6b88b37bbc39f3bafckzMf-UqXugJwfEowc0JboisMqlPIokptKpcIihMX6i8oey67aOllVl4yfGFo_Xpz",
    }),
  ],
}).addTo(map);



