var searchBtn = document.querySelector("#search-btn")
var zipBtn = document.querySelector("#username")
console.log("buttonworks")

var currentLocationEl = document.querySelector("#currentLocation")

var apiKey = "AIzaSyDW9m-QeI0q_p6yQZ_vpMvfuuwxTOPBoOc"

var searchcurrentLocation = function(e) {
    e.preventDefault()
    console.log(e)

    /*fetch("https://www.googleapis.com/geolocation/v1/geolocate?/client_id=" + apiKey)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var state = document.querySelector("#state");
                state.textContent = state 
        })
        https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

        */
        navigator.geolocation.getCurrentPosition(function(pos){
            console.log(pos.coords)
         var lat=pos.coords.latitude
         var long=pos.coords.longitude
         var latLong = (lat + long);
         console.log(latLong)
         console.log(lat,long)
         getCityName(lat,long)
        })

}
function getCityName(lat,long){

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${apiKey}`)            // ` for interprelation
            .then(response => response.json())
            .then(data => {
                console.log(data.results[0].address_components[7].short_name)
                getCityVenue(data.results[0].address_components[7].short_name)
                
                



                // var eventNameColumn = document.createElement("td");
                //     eventNameColumn.textContent = data.events[i].title
            })
}
function getCityVenue(zipCode){
    console.log(zipCode)
// USe the zipcode to get venues with seatgeek
// go to seatgeeks documentation page, ctrl f for zip or postal, then should show how to format a request using the zipcode. name, address and image 
}
zipBtn.addEventListener("click", searchcurrentLocation)