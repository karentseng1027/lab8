function initMap() {
	// add your code here
	L.mapquest.key = "EENWeYx21Rmoxbe0G6xqLvmUMyMDPWUq";

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.23],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.23]).addTo(map);
}