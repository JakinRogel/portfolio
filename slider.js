// var to track how many times the button has been pressed
var tracker = 1;
// function to run when button is pressed
function displayNone() {
  // if statement to determine if button has been pressed 4 times
  if (tracker == 4) {
    // get item by ID
    var action = document.getElementById("slide" + tracker);
    // set display to none
    action.style.display = "none";
    // get item by ID and make sure it is slide1 resetting the slider
    var action = document.getElementById("slide1");
    // set slide1 to block to show
    action.style.display = "block";
    // reset tracker to 1
    tracker = 1;
    // make sure to return so following code does not run
    return;
  }
  // get item by ID and set to var action. Slide is then determined by concatenating 'slide' to the tracker iteration which starts at one and is incremented each time the button is pressed
  var action = document.getElementById("slide" + tracker);
  // set current slide to none display to make it disappear
  action.style.display = "none";
  // get item by ID and iterate tracker
  var action = document.getElementById("slide" + ++tracker);
  // display slide by setting display to block
  action.style.display = "block";
  // console log success for testing purposes
  console.log(displayNone);
}
