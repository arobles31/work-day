// Display today's day and date
var todayDate = moment().format('dddd, MMM Do, YYYY');
$("#currentDay").html(todayDate);

function timeTracker() {
    var timeNow = moment().hour();
}

$(document).ready(function () {
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save text in local storage
    localStorage.setItem(time, text);
  })

  $("#hour9 .description").val(localStorage.getItem("hour9"));


timeTracker();
})