//applies dayjs to the page in the desired format
var rightNow = dayjs();
  $('#currentDay').text(rightNow.format('DD MMMM YYYY, HH:mm:ss'));

//calls elements from the html using jQuerythat need to be global variables
var saveButtonEl = $('.btn');
var toDoEl = $('.description');

//isolates the hour of the dayjs for comparison to the times on the calendar sections
var hour = dayjs().startOf('hour');

//targets the individual buttons on the calendar. The Target assures that we are noting which button was clicked and attaches it to the calendar entry, and then stores both in local storage
saveButtonEl.on('click', function(event) {
  event.preventDefault();
    let input = event.currentTarget.parentElement.children[1].value
    let hourId = event.currentTarget.parentElement.getAttribute('id')
    localStorage.setItem(hourId, input)
  })

  //Attempts to pull the stored data out of local storage. Currently not successful
  function showCalItems() {
    var input = localStorage.getItem('input');
    var hourId = localStorage.getItem('hourId');
    
    toDoEl.textContent = input
  }
    showCalItems()

  
//Below are my attempts to isolate and iterate the calendar ids to compare to the dayjs hour and apply the classes of past, present and future to affect the color of the calendar. They are currently not successful.

// function getId (calEnt){
//   for(i=0; i < 9; i++)
  
// getId()

// console.log(getId)
// var calEnt = $('.calendar').children('div')
// console.log(calEnt)
// var hourId = JSON.stringify(calEnt)
// console.log(hourId)
// //for loop to get ids out of children div?

// function getHours(calEnt) {
//   for (let i = 0; i < $('.calendar').length ; i++) {
    
  
    // if (rightNow < hourId) {
    //     toDoEl.attr('class','future')
    //   } else if (rightNow > hour){
    //     toDoEl.attr('class','past')
    //   } else {
    //     toDoEl.attr('class','present')
    //   };




//     // TODO: Add a listener for click events on the save button. This code should
//     // use the id in the containing time-block as a key to save the user input in
//     // local storage. HINT: What does `this` reference in the click listener
//     // function? How can DOM traversal be used to get the "hour-x" id of the
//     // time-block containing the button that was clicked? How might the id be
//     // useful when saving the description in local storage?
//     //
//     // TODO: Add code to apply the past, present, or future class to each time
//     // block by comparing the id to the current hour. HINTS: How can the id
//     // attribute of each time-block be used to conditionally add or remove the
//     // past, present, and future classes? How can Day.js be used to get the
//     // current hour in 24-hour time?
//     //
//     // TODO: Add code to get any user input that was saved in localStorage and set
//     // the values of the corresponding textarea elements. HINT: How can the id
//     // attribute of each time-block be used to do this?
//     //
//     // TODO: Add code to display the current date in the header of the page
