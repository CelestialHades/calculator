// 1. Get the display element
const display = document.getElementById('display');

// 2. Function to append characters to the display
function appendToDisplay(value) {
  // 3. If display is '0' and value isn't '.', replace it; otherwise append
  if (display.value === '0' && value !== '.') {
    display.value = value;
  } else {
    display.value += value;
  }
}

// 4. Function to calculate the result
function calculate() {
  // 5. Try to evaluate the expression, catch errors
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
    setTimeout(clearDisplay, 1000); // Clear after 1 second
  }
}

// 6. Function to clear the display
function clearDisplay() {
  display.value = '0';
}