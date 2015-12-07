var restaurants = [
	{
		name: "Old Bear",
		latitude: 41.901662,
		longitude: 12.473234,
		address: "Via dei Gigli D'Oro, 3, 00186 Rome, Italy",
		url: "http://www.yelp.com/biz/old-bear-roma",
	},
	{
		name: "La Botticella",
		latitude: 41.890144,
		longitude: 12.468270,
		address: "Vicolo del Leopardo 39A 00153 Rome Italy",
		url: "http://www.yelp.com/biz/la-botticella-roma",
	},
	{
		name: "Panino Divino",
		latitude: 41.906896,
		longitude: 12.458347,
		address: "Via dei Gracchi 11, 00192 Rome, Italy",
		url: "http://www.yelp.com/biz/panino-divino-roma",
	},
	{
		name: "Pastasciutta",
		latitude: 41.904638,
		longitude: 12.458035,
		address: "Via delle Grazie 5, 00193 Rome, Italy",
		url: "http://www.yelp.com/biz/pastasciutta-roma",
	},
	{
		name: "Da Francesco",
		latitude: 41.899488,
		longitude: 12.470647,
		address: "Piazza del Fico 29, 00186 Rome, Italy",
		url: "http://www.yelp.com/biz/da-francesco-roma?osq=dinner",
	},
];



// var restaurants = {
// 	["Old Bear", 41.901662, 12.473234],
// 	["La Botticella", 41.890144, 12.468270],
// 	["Panino Divino", 41.906896, 12.458347],
// 	["Pastasciutta", 41.904638, 12.458035],
// 	["Da Francesco", 41.899488, 12.470647]
// };


// var Restaurant = function (data) {
// 	this.name = ko.observable(data.name);
// 	this.latitude = ko.observable(data.latitude);
// 	this.longitude = ko.observable(data.longitude);
// 	this.latLng = ko.computed(function() {
// 	        return this.latitude() + ", " + this.longitude();
// 	    }, this);
// };


var markers = [];			
		

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('google_map'), {
    center: {lat: 41.899488, lng: 12.470647}, 
    scrollwheel: false,
	  zoom: 14
  });
  var infowindow = new google.maps.InfoWindow();

      var marker, i;

      for (i = 0; i < restaurants.length; i++) {  
        marker = new google.maps.Marker({
			position: new google.maps.LatLng(restaurants[i].latitude, restaurants[i].longitude),
          	map: map
		});
		markers.push(marker);
		
//		var placeMarkerOnCurrentRestaurant = function() {
//		   markers.forEach(function(marker) {
// 			if (marker.getPosition().lat().toFixed(6) == restaurants[i].latitude() && marker.getPosition().lng().toFixed(6) == restaurants[i].longitude()) {
				// infowindow.setContent(restaurants[i].name);
				// infowindow.open(map, marker);
				// marker.setAnimation(google.maps.Animation.BOUNCE);
				// window.setTimeout(function() {
				// marker.setAnimation(null);
				// }, 2500);
// 			}
//			else {
//				marker.style.display = "none";
//			}
//		   }
// 		});

// var placeMarkerOnCurrentRestaurant = function() {
// 		   markers.forEach(function(marker) {
//  			if (marker.getPosition().lat().toFixed(6) !== restaurants[i].latitude() && marker.getPosition().lng().toFixed(6) !== restaurants[i].longitude()) {
// 				marker.style.display = "none"
// 			}
// 		});
	 
	
		//		position: new google.maps.LatLng(restaurants[i][1], restaurants[i][2]),
		
		var filterRestaurants = function(e) {
			for (var i = 0; i < restaurants.length; i++) {
				if (document.getElementById("search_bar").value.toUpperCase() === restaurants[i].name.toUpperCase()) {
				 	 placeMarkerOnCurrentRestaurant();
			 	 }
			  	else {
				  console.log("Cannot find restaurant");
			 	}
		  	 }
			 e.preventDefault();
		};
		
		searchButton.addEventListener("click", filterRestaurants);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(restaurants[i].name);
            infowindow.open(map, marker);
			marker.setAnimation(google.maps.Animation.BOUNCE);
			window.setTimeout(function() {
			marker.setAnimation(null);
			}, 2500);
          }
        })(marker, i));
      }
  };
  
  
var searchButton = document.getElementById("search_button");
var searchedRestaurant = document.getElementById("search_bar").value.toUpperCase();

  
// var filterRestaurants = function(e) {
// 	for (var i = 0; i < restaurants.length; i++) {
// 		if (document.getElementById("search_bar").value.toUpperCase() === restaurants[i].name.toUpperCase()) {
// 		 	 placeMarkerOnCurrentRestaurant();
// 	 	 }
// 	  	else {
// 		  console.log("Cannot find restaurant");
// 	 	}
//   	 }
// 	 e.preventDefault();
// };

// var placeMarkerOnCurrentRestaurant = function() {
// 	for (var i = 0; i < restaurants.length; i++) {
// 		if (document.getElementById("search_bar").value.toUpperCase() !== restaurants[i].name.toUpperCase()) {
// 			marker.style.display = "none";
// 		}
// 	}
// };


// searchButton.addEventListener("click", filterRestaurants);

	  
initMap();


	

