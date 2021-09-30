function timeCompare() {
    // gets and logs current hour in military time
    var currentHour = moment().hour();
    console.log(currentHour)

    // search for the text class in each time block and convert the ID to an integer 
    $(".text").each(function(){
        var scheduleHour = parseInt($(this).attr("id"))
        console.log(scheduleHour)

        // compare the integer of the ID to the current hour and swap classes accordingly
        
        // turn grey for "past"
        if (scheduleHour < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        // turn red for "present"
        else if (scheduleHour == currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        // turn green for "future"
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }

    })
}



// sets ticker for clock ticker function
var ticker = setInterval(clockTicker, 1000);
// displays the current time in current day ID
function clockTicker(){
    var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    document.getElementById("currentDay").innerHTML = "Current date: " + date
}

clockTicker()
timeCompare()