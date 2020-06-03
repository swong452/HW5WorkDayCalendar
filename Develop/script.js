$("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMM Do'));
//var Ninehour = document.querySelector("#\\39hr");

compareTime();
UserEvents();

// Function to compare current time vs timeblock time
// Set color of time block to be past(grey), present (salmon), future(aqua)
// May be use this later: if(momentTime.isBefore(laterMomentTime)){
function compareTime() {
    var currentTime = parseInt(moment().format('HH'));
    //console.log("Current Hr is: ", currentTime, typeof(currentTime));
    for (time=9;time < 21; time++) {
        var timeblock = parseInt($("#" +time+"hr").attr("data-index"));
        //console.log("Time block is: ", timeblock, typeof(timeblock));

        if (timeblock < currentTime) {
            $("#"+time+"hr").css("background","lightgrey");
        } 
        else if (timeblock == currentTime) {
        //else if (timeblock == currentTime) {
            $("#"+time+"hr").css("background","salmon");
        }
        else if (timeblock > currentTime) {
            //console.log("Time block hr is Larger than current time", timeblock );
            $("#"+time+"hr").css("background","aqua");
        }
    } // End For 
} // End compareTimesss



// function UserEvents display local stored event when screen is displayed
function UserEvents() {
    for (i = 9; i < 21; i++) {
        var displayevent="";
        displayevent = localStorage.getItem("eventTime" + i);
        //console.log("Test local storage report successful: ", localStorage.getItem("eventTime" + i), "at time hr: ", i);
        console.log("Test local storage report successful: ", displayevent, "at time hr: ", i);
        $("#"+i+"hr").value = displayevent;
        $("#"+i+"hr").textContent = displayevent;
        $("#"+i+"hr").textContent = "WHY NOT";
        $("#"+i+"hr").innerHTML = displayevent;
        console.log("The object inside Userevents are: ", $("#"+i+"hr").value);
        console.log("The object inside Userevents are: ", $("#"+i+"hr").textContent);
        console.log("The object inside Userevents are: ", $("#"+i+"hr").innerHTML);
        

        console.log("The object inside Userevents are: ", $("#"+i+"hr"));
        $("#10hr").text("Static Content");
       // console.log("Static objec content", $("#10hr").text);
    }
}


// Listen to any user input on time block
$(".hr").on("click", eventupdate);
function eventupdate(event) {
    var userevent = $(this);
    console.log("Clicked index is", $(this).attr("data-index"));
}

// Listen to save button clicked.
// once clicked, check previous sibling value (text content)
// Function saveEvent will save the userinput event into local storage
// each hour has its own local storage , format "eventTime<hr>"
$(".saveBtn").on("click", saveEvent);
function saveEvent(event) {
    var prevchild = $(this).prev();
    var eventHr = prevchild.attr("data-index");
    var toDolist = "";

    console.log("Previous Sibling is:", prevchild);
    console.log("Previous Sibling is:", prevchild.attr("data-index"));
    console.log("Previous Sibling text is:", prevchild.val());
    toDolist = prevchild.val();
    localStorage.setItem("eventTime"+eventHr, toDolist )
} 







//++++++++++++++ EXTRA +++++++++++++++++++++++++++
// Command to set the color of the input box background
//$("#10").css("background","red");

// Get time block hour value
//console.log("Time block 9AM , data-index value is:", $("#9").attr("data-index"), typeof($("#9").attr("data-index")));
//var blockhr = $("#9AM").attr("data-index");


