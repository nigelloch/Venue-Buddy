
var searchBtn = document.querySelector("#search-btn")

var zipEl = document.querySelector("#zip")

var apiKey = "56247a0e9b7f734b3c0cf12d84afedc1ef3671e16480063c1abb4c8f8ddda557"

var searchZip = function() {

    // var zip = zipEl.value
    // console.log(zip)

    fetch("https://api.seatgeek.com/2/venues/632" + apiKey)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                var state = document.querySelector("#state");
                    state.textContent = state

})
}




searchBtn.addEventListener("click",searchZip)
