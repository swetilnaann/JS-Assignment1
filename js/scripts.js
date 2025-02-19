// scripts.js

// Constants for query selector
const studentIdParagraph = document.getElementById('myStudentId');
const customNumberInput = document.getElementById('customNumber');
const customColorButton = document.querySelector('.custColor');
const randomColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const imageElement = document.getElementById('images');

// Student ID (replace with your actual ID)
const studentId = '200588539'; // Replace with your student ID

// Array of image file names
const imageFileNames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// Function to change background color from user input and add student ID
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);
    if (isNaN(userInput) || userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (userInput >= 0 && userInput < 20) {
        document.body.style.backgroundColor = 'green';
    } else if (userInput >= 20 && userInput < 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (userInput >= 40 && userInput < 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (userInput >= 60 && userInput < 80) {
        document.body.style.backgroundColor = 'purple';
    } else if (userInput >= 80 && userInput <= 100) {
        document.body.style.backgroundColor = 'yellow';
    }
    studentIdParagraph.textContent = studentId;
}

// Function to change background color from random number
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 101);
    if (randomNum < 20) {
        document.body.style.backgroundColor = 'green';
    } else if (randomNum < 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (randomNum < 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (randomNum < 80) {
        document.body.style.backgroundColor = 'purple';
    } else if (randomNum <= 100) {
        document.body.style.backgroundColor = 'yellow';
    }
}

// Function to generate options for select list
function addList() {
    imageFileNames.forEach((fileName) => {
        const optionElement = document.createElement('option');
        optionElement.value = fileName;
        optionElement.textContent = fileName;
        imageSelect.appendChild(optionElement);
    });
}

// Function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    imageElement.src = `img/${selectedImage}`;
    imageElement.alt = selectedImage;

}

// Event listeners for on click event of buttons and select
customColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

// Initialize the select list
addList();
