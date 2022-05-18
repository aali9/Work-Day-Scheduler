//Variables

var myTEXT =$("#myText");
var saveBtn =$(".savebtn");
var DescriptionBox =$("input");
var CurrentHR = moment().format("h");

//Todays Date

var date = moment().format("MMMM Do, YYYY");
$("#currentDay").text(date);

// LOCAL STORAGE FUNCTION ------------------------------------------------------------------------------

$(document).ready(function () {
  // Save buttons job
  $(".saveBtn").on("click", function () {
    // Catch the value of 3rd 'dom' down, which is the user input value/class called description
    var myText = $(this).siblings(".description").val();

    // Catch the id of the 1st 'dom', which is the times, explained in the lines below(34-43)
    var timings = $(this).parent().attr("id");

    // Below saves users input on the planner even after refreshing in local storage..
    localStorage.setItem(timings, myText);

    // Logging the activity
    console.log("button is clicked");
    console.log(myText);
    console.log(timings);
  });

  