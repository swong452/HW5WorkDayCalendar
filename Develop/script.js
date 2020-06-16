// Display current weekday, month, and date
$("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMM Do'));

compareTime();
UserEvents();

// Function to compare current time vs timeblock time
// Set color of time block to be past(grey), present (salmon), future(aqua)
// May be use this later: if(momentTime.isBefore(laterMomentTime)){
function compareTime() {
    var currentTime = parseInt(moment().format('HH'));
    
    //Start from 8AM, til 8PM
    for (time=8;time < 21; time++) {
        var timeblock = parseInt($("#" +time+"hr").attr("data-index"));
        
        // PastTime
        if (timeblock < currentTime) {
            //$("#"+time+"hr").css("background","lightgrey");
            $("#"+time+"hr").addClass("past");
        } 
        else if (timeblock == currentTime) {
            //$("#"+time+"hr").css("background","salmon");
            $("#"+time+"hr").addClass("present");
        }
        // Future Time
        else if (timeblock > currentTime) {
            //$("#"+time+"hr").css("background","aqua");
            $("#"+time+"hr").addClass("future");
        }
    } // End For 
} // End compareTimesss



// function UserEvents display local stored event when screen is displayed
function UserEvents() {

    for (i = 8; i < 21; i++) {
        var displayevent="";
        displayevent = localStorage.getItem("eventTime" + i);
        console.log("Test local storage report successful: ", displayevent, "at time hr: ", i);
        
        // 2 ways below to display the local storage on screen
        //document.getElementById(i+"hr").value = displayevent;
        $("#"+i+"hr").val(displayevent);
    

    } // End For
} // End Function UserEvents



// Event Listener: Save user Input.
// once clicked, check previous sibling value (text content)
// On the previous sibling (the input text element), extract the data-index value.
// data-index will be used later, to uniquely append to each hr local storage var "eventTime" + dataIndex.
// Next, save user typed event, from the input text element "val()", into local var "toDoList" 
// save toDolist, into a local storage of that hour 
// each hour has its own local storage , format "eventTime <hr>", where hr = previous extracted data-index.
$(".saveBtn").on("click", saveEvent);
function saveEvent(event) {
    var prevchild = $(this).prev();
    var eventHr = prevchild.attr("data-index");
    var toDolist = "";
    toDolist = prevchild.val();
    localStorage.setItem("eventTime"+eventHr, toDolist )
} 


