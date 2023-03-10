// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
//});

var currentDayEl = $('#currentDay');


function displayTime() {
  var today = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDayEl.text(today);
}

function colorChange() {
  for (var i = 9; i < 18; i++) {
  var id = `hour-${i}`;  
  var timeBlock = $('#' + id);
  var currentHour = dayjs().hour();
  var compare = timeBlock.attr('id').split('-')[1];
  //console.log(timeBlock.children());
    if (compare == currentHour) {
      timeBlock.addClass('present');
      timeBlock.removeClass('future');
      timeBlock.removeClass('past')
    } else if (compare < currentHour) {
      timeBlock.addClass('past');
      timeBlock.removeClass('present');
      timeBlock.removeClass('future')
    } else if(compare > currentHour) {
      timeBlock.addClass('future');
      timeBlock.removeClass('past');
      timeBlock.removeClass('present')
    }

    var getSavedText = localStorage.getItem(id);
    $(timeBlock.children()[1]).val(getSavedText);

  }
}

function init() {
  var textArray = ['9AM', "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", '4PM', "5PM"];
  for (var timeSlot of textArray) {
  //console.log(getSavedText);
 //console.log(currentText);
 
  // var name = "Justin"
  // string concat: "name: " + name + "."
  // template literal: `name: ${name}.`
  }
}

$('.saveBtn').on('click', function() {
  userText = $(this).siblings('.description').val().trim();
  
   // textArea = $(this).siblings().text().trim();
    textArea = $(this).parent().attr('id');
    //console.log($(this).parent().attr('id'));
    localStorage.setItem(textArea, JSON.stringify(userText));
  })
  

  
  displayTime();
  setInterval(displayTime, 1000);
  colorChange();
  //init();
  //(this).siblings