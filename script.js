// 1. Get the display element
// grabs the input field where we will show numbers and results
const display = document.getElementById('display');

// 2. Function to append characters to the display
// takes a value (e.g '5', '+') and adds it to the display
// called by each button's click
function appendToDisplay(value) {
  // 3. If display is '0' and value isn't '.', replace it; otherwise append
  // display.value gets/sets the inputs text
  // if it is 0 and we are not adding a decimal replace it 0 > 5
  // otherwise append the value eg 5 > 5+
  // += concatenates strings eg 5 + 5 = 5+
  if (display.value === '0' && value !== '.') {
    display.value = value;
  } else {
    display.value += value;
  }
}

// 4. Function to calculate the result
// computes the result when = is clicked
function calculate() {
  // 5. Try to evaluate the expression, catch errors
  // eval() evaluates a string as javascript code eg 5 + 3 > 8
  // eval runs this safetly if it fails eg '5 +' catch handles it
  // catch sets the display to erorr amd clear it after 1 second using setTimeout
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
    setTimeout(clearDisplay, 1000); // Clear after 1 second
  }
}

// 6. Function to clear the display
// resets the display to 0 when C is clicked
function clearDisplay() {
  display.value = '0';
}