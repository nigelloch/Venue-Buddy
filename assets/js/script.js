
var searchBtn = document.querySelector("#search-btn")
console.log("buttonworks")

var zipEl = document.querySelector("#zip")

//var apiKey = "56247a0e9b7f734b3c0cf12d84afedc1ef3671e16480063c1abb4c8f8ddda557"
var apiKey = 'MjQ5NjgyNzZ8MTYzOTcwODEzMS4yNTQzNDE0'

var searchZip = function(e) {
    e.preventDefault()
    console.log(e)

    // var zip = zipEl.value
    // console.log(zip)

    // venues api endpoint
    fetch("https://api.seatgeek.com/2/venues/632/client_id=" + apiKey)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                var state = document.querySelector("state");
                    state.textContent = state

})
}

Request URL: https://api.seatgeek.com/2/venues/632/client_id=MjQ5NjgyNzZ8MTYzOTcwODEzMS4yNTQzNDE0





searchBtn.addEventListener("click",searchZip)
