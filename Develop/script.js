function timeCompare() {
    // gets and logs current hour in military time
    var currentHour = moment().hour();
    console.log("The current hour is " + currentHour);

    // find each time-block class and convert it's ID to an integer "scheduleHour"
    $(".time-block").each(function(){
        var scheduleHour = parseInt($(this).attr("id"));

        // compare the integer "scheduleHour" to the current military time hour and swap classes accordingly
        
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

    // find the textarea via ".description" in each div ID and add the value of each saved key from storage
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
};

$(".saveBtn").on("click", function () {
    // set key variable to the button parent div's ID (being the tables hour)
    // then set a variable that holds the textarea value via "siblings(.description)" (textarea is a sibling of the button)
    var tableHour = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();
    
    // save input in local storage
    localStorage.setItem(tableHour, userInput);
    console.log(tableHour, userInput);
});


// sets second ticker for clock
var ticker = setInterval(clockTicker, 1000);
// displays the current time in current day ID
function clockTicker(){
    var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    document.getElementById("currentDay").innerHTML = "Current date: " + date
};

timeCompare()
clockTicker()