var map = L.map('map').setView([38.6270,-90.1994], 10);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

var marker = L.marker([38.630434, -90.189394]).addTo(map);
var marker2 = L.marker([38.624154, -90.188558]).addTo(map);
var marker3 = L.marker([38.628666, -90.287454]).addTo(map);
var marker4 = L.marker([38.605044, -90.218313]).addTo(map);
var marker5 = L.marker([38.621108, -90.212835]).addTo(map);

marker.bindPopup("<b>Resturant 1</b><br>Sugarfire Smokehouse").openPopup();
marker2.bindPopup("<b>Resturant 2</b><br>Carmine's Steakhouse").openPopup();
marker3.bindPopup("<b>Resturant 3</b><br>Courtesy Diner").openPopup();
marker4.bindPopup("<b>Resturant 4</b><br>Blues City Deli").openPopup();
marker5.bindPopup("<b>Resturant 5</b><br>PW Pizza").openPopup();
