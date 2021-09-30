var ticker = setInterval(clockTicker, 1000);

function clockTicker(){
    var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    document.getElementById("currentDay").innerHTML = "Current date: " + date
}

clockTicker()