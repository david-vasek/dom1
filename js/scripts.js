'use strict';

const bodyElement = document.querySelector('body');
const title = document.querySelector('#title');
const subtitle = document.querySelector('.subtitle');
const firstParagraph = document.querySelector('p');
const allParagraphs = document.querySelector('p');
const clickMeButton = document.querySelector('#clickMe');

const h3element = document.createElement('h3');
h3element.innerText = "Hello, I am an H3 Tag!"

bodyElement.append(h3element);


let clickCount = 0;

function clickCounter() {
    clickCount = clickCount + 1;
    console.log('click count is ', clickCount);
    return clickCount;
}

clickMeButton.addEventListener('click', function() {
    clickCounter();
    title.innerText = "Hello JavaScript!";
});