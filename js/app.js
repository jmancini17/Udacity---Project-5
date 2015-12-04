	var restaurants = [
		["Old Bear", 41.901662, 12.473234],
		["La Botticella", 41.890144, 12.468270],
		["Panino Divino", 41.906896, 12.458347],
		["Pastasciutta", 41.904638, 12.458035],
		["Da Francesco", 41.899488, 12.470647]
	];
			
		

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
          position: new google.maps.LatLng(restaurants[i][1], restaurants[i][2]),
          map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(restaurants[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
  };
  
  
var searchButton = document.getElementById("search_button");
var searchedRestaurant = document.getElementById("search_bar").value.toUpperCase();

  
var filterRestaurants() = {
	for (var i = 0; i < restaurants.length; i++) {
		if (searchedRestaurant === restaurants[i][1].toUpperCase()) {
		 	 console.log("Hooray");
	 	 }
	  	else {
		  displaySearchError();
	 	}
  	 }

};

searchButton.addEventListener("click", filterRestaurants);

	  
initMap();


	

