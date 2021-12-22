


var searchBtn = document.querySelector("#search-btn")
console.log("buttonworks")

//var apiKey = "56247a0e9b7f734b3c0cf12d84afedc1ef3671e16480063c1abb4c8f8ddda557"
var apiKey = 'MjQ5NjgyNzZ8MTYzOTcwODEzMS4yNTQzNDE0'

var searchLocation = function(e) {
    e.preventDefault()
    console.log(e)

    var latLong = document.getElementById("username").value
    console.log(latLong)

    var radius = document.getElementById("radius").value
    console.log(radius)

    // venues api endpoint https://api.seatgeek.com/2/recommendations?performers.id=35&postal_code=10014&client_id=YOUR_KEY
                    // https://api.seatgeek.com/2/events?geoip=" + latLong + "&range=" + radius + "mi&client_id=" + apiKey
    
    fetch("https://api.seatgeek.com/2/events?geoip=" + latLong + "&range=" + radius + "mi&client_id=" + apiKey + "&per_page=25")
            .then(response => response.json())
            .then(data => {
                console.log(data)

                document.getElementById("venue-table-body").innerHTML= ""
                for(i=0; i<data.events.length; i++) {
                    var tableRow = document.createElement("tr");

                    var unixDate = new Date(data.events[i].datetime_local).getTime()/1000
                        var date = new Date(unixDate*1000)
                        var month = date.getMonth();
                        var day = date.getDate();
                        var hours = date.getHours();
                        var minutes = date.getMinutes();

                        if (hours > 0 && hours <= 12) {
                            hours;
                          } else if (hours > 12) {
                            hours= hours - 12;
                          } else if (hours == 0) {
                            hours = 12;
                          }
                          console.log(typeof minutes)
                         if (minutes == 0){
                             minutes = "00"
                         } 
                         if (hours > 12) {

                         }
                         console.log(unixDate)


                    var timeColumn = document.createElement("td");
                    timeColumn.textContent = month + 1 + "/" + day + " " + hours + ":" + minutes + "pm"
                    //timeColumn.textContent = data.events[i].datetime_local

                    var date = new Date(data.events[i].datetime_local).getTime()/1000
                        console.log(date)

                    var venueColumn = document.createElement("td");
                    venueColumn.textContent = data.events[i].venue.name

                    var eventNameColumn = document.createElement("td");
                    eventNameColumn.textContent = data.events[i].title

                    var locationColumn = document.createElement("td");
                    locationColumn.textContent = data.events[i].venue.extended_address

                    var purchaseColumn = document.createElement("td");
                         var anchorLink = document.createElement("a")
                         anchorLink.setAttribute("href",data.events[i].url)
                         anchorLink.textContent = "Buy Tickets!"
                         purchaseColumn.appendChild(anchorLink)
                    //purchaseColumn.textContent = data.events[i].url

                    tableRow.appendChild(timeColumn);
                    tableRow.appendChild(venueColumn);
                    tableRow.appendChild(eventNameColumn);
                    tableRow.appendChild(locationColumn);
                    tableRow.appendChild(purchaseColumn);



                    document.getElementById("venue-table-body").appendChild(tableRow)
                }

            })
}




 searchBtn.addEventListener("click",searchLocation)

