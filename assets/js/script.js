// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var rightNow = dayjs();
  $('#currentDay').text(rightNow.format('DD MMMM YYYY, HH:mm:ss'));

var saveButtonEl = $('.btn');
var toDoEl = $('.description');
var hour = dayjs().startOf('hour');

console.log(hour)

function showCalItems() {
  var input = localStorage.getItem("input");
  var hourId = localStorage.getItem("hourId")


toDoEl.textContent = input;
}

saveButtonEl.on('click', function(event) {
  event.preventDefault();
// console.log(toDoEl)
// console.log(saveButtonEl)
// console.log(event.currentTarget)
// console.log(event.currentTarget.parentElement.getAttribute('id'))
  var newItem = {
    input: event.currentTarget.parentElement.children[1].value,
    hourId: event.currentTarget.parentElement.getAttribute('id')
  }
    localStorage.setItem("input", input);
    localStorage.setItem("hourId", hourId);
  
  
});

showCalItems()



// var calEnt = $('.calendar').children('div')
//   console.log(calEnt)
// // }



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
    
  
//     // if (rightNow < hourId) {
//     //     toDoEl.attr('class','future')
//     //   } else if (rightNow > hour){
//     //     toDoEl.attr('class','past')
//     //   } else {
//     //     toDoEl.attr('class','present')
//     //   };
//   }

//  }

// getHours()

// var hourId = JSON.stringify(calEnt)

// var toDoList = JSON.parse(localStorage.getItem('list')) || []
//   toDoList.push(newItem)

//   localStorage.setItem('list', JSON.stringify(toDoList));

//   console.log(localStorage)


// function() {
//
// }
//look at ID number, manipulate string or call index of number, do for loop

// function handleRemoveItem(event) {
//   // convert button we pressed (`event.target`) to a jQuery DOM object
//   var btnClicked = $(event.target);

//   // get the parent `<li>` element from the button we pressed and remove it
//   btnClicked.parent('li').remove();
// }

// // use event delegation on the `shoppingListEl` to listen for click on any element with a class of `delete-item-btn`
// shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem);
// shoppingFormEl.on('submit', handleFormSubmit);


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
