var myArray = []
function buildTable(data){
    var table = document.getElementById('venue-table-body')

    for(var i = 0; i < data.length; i++){
        var row = <tr>
                    <td>${data[i].time}</td>
                    <td>${data[i].venue}</td>
                    <td>${data[i].price}</td>
                    <td>${data[i].location}</td>
                  </tr>
        table.innerHTML += row
    }
}

buildTable(myArray)