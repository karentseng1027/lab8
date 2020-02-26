function initMap() {
	// add your code here
	L.mapquest.key = 'EENWeYx21Rmoxbe0G6xqLvmUMyMDPWUq';

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
		center: [32.883066, -117.237126],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12
	});

	L.marker([50.5, 30.5]).addTo(map);
}