// Alert Me Section
document.getElementById('alertButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        alert(`Hi ${name}!`);
    } else {
        alert('Please enter a name.');
    }
});

// Change Color Section
const colorButton = document.getElementById('colorButton');
let isBlue = localStorage.getItem('isBlue') === 'true';

function setBackgroundColor() {
    document.body.style.backgroundColor = isBlue ? 'blue' : 'green';
}

setBackgroundColor(); // Set initial color

colorButton.addEventListener('click', function() {
    isBlue = !isBlue;
    setBackgroundColor();
    localStorage.setItem('isBlue', isBlue);
});

// Text Tester Section
document.getElementById('validateButton').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    const specialChars = /[!@#$%^&*()]/;
    if (specialChars.test(text)) {
        alert('Special characters found in the text!');
    } else {
        alert('No special characters found.');
    }
});

// Add Text Section
document.getElementById('addTextButton').addEventListener('click', function() {
    const heading = document.getElementById('mainHeading');
    heading.textContent += ' Add Text';
});
