$("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMM Do'));

// Below are snippet , used to compare the time, using moment.js
// For each time block; get its HH hour time
// every time the page is loaded; gets the current Hr using moment.js
// Use the following method to compare the 2 x time
// let momentTime = moment("13:30", 'HH:mm');
// let laterMomentTime = moment("15:00", 'HH:mm');

// save each of the time block in an arry of objects
// each object has {data-index:9, id:"9AM"}
// In a for loop, for each data-index value(which is hr) , compare to current hour.
// for those hr that is past: retrieve the ID value, and set the background color. 

// if(momentTime.isBefore(laterMomentTime)){
//   console.log("xxx");
//   set the color of time block to be past(grey), present (red), future(green)
// }

// Command to set the color of the input box background
$("#10AM").css("background","red");

// Get current Hour
console.log("current hour is: ", moment().format('HH'));

// Get time block hour value
console.log("Time block 9AM , data-index value is:", $("#9AM").attr("data-index"));
var blockhr = $("#9AM").attr("data-index");


