let display = document.getElementById('display');
let darkMode = false;

function appendToDisplay(value) {
  if (display.textContent === '0' && value !== '.') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);

}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = 'Error';
  }
}

function toggleTheme() {
  if (darkMode) {
    document.body.classList.remove('dark-mode');
    darkMode = false;
  } else {
    document.body.classList.add('dark-mode');
    darkMode = true;
  }
}
