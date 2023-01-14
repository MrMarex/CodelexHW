/* eslint linebreak-style: ["error", "windows"] */
console.log('Script is working');
const button1 = document.getElementsByClassName('btn--1');
const button2 = document.getElementsByClassName('btn--2');
const button3 = document.getElementsByClassName('btn--3');
const button4 = document.getElementsByClassName('btn--4');
const button5 = document.getElementsByClassName('btn--5');
const button6 = document.getElementsByClassName('btn--6');
const block = document.getElementsByClassName('block');
const blockText = document.getElementsByClassName('text--block-2');
const block3 = document.getElementsByClassName('block--3');
const block4 = document.getElementsByClassName('block--4');
let block4Opacity = 1;

button1.addEventListener('click', () => {
  block.style.backgroundColor = 'yellow';
});

button2.addEventListener('click', () => {
  blockText.innerHTML = 'Success';
});

button3.addEventListener('click', () => {
  block3.style.opacity = 0;
});

button4.addEventListener('click', () => {
  if (block4Opacity === 1) {
    block4.style.opacity = 0;
    block4Opacity = 0;
  } else {
    block4.style.opacity = 1;
    block4Opacity = 1;
  }
});
