/* eslint-disable no-plusplus */
/* eslint linebreak-style: ["error", "windows"] */
console.log('Script is linked');
const body = document.querySelector('body') as HTMLElement;
const buttons: HTMLButtonElement[] = Array.from(document.querySelectorAll('.btn-primary'));
const blocks: HTMLDivElement[] = Array.from(document.querySelectorAll('.block'));
const blockText: HTMLElement[] = Array.from(document.querySelectorAll('.block__text'));
const changingText: HTMLElement = document.querySelector('.changing-text');

let block4Opacity = 1;
const colors = ['red', 'green', 'blue', 'yellow', 'aquamarine'];
let timerNumber = 0;
let timer: any;

// Nospiežot uz 1. pogas, 1. kvadrāta krāsa nomainās uz dzeltenu krāsu.
buttons[0].addEventListener('click', () => {
  blocks[0].style.backgroundColor = 'yellow';
});

// Nospiežot uz 2. pogas, 2. kvadrātā teksts nomainās uz SUCCESS
buttons[1].addEventListener('click', () => {
  blockText[0].innerHTML = 'Success';
});

// Nospiežot uz 3. pogas, 3. kvadrāts kļūst neredzams
buttons[2].addEventListener('click', () => {
  blocks[2].style.opacity = '0';
});

// Nospiežot uz 4. pogas, 4. kvadrāts kļūst neredzams, nospiežot vēlreiz,
// tas atkal kļūst redzams
buttons[3].addEventListener('click', () => {
  blocks[3].style.opacity = (block4Opacity === 1) ? '0' : '1';
  block4Opacity = (block4Opacity === 1) ? 0 : 1;
});

// Nospiežot uz 5. pogas, 5. kvadrāta krāsa nomainās uz vienu no 5 iepriekš izdomātām
// krāsām. Katru reizi uz citu, bet var atkārtoties
buttons[4].addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 5);
  blocks[4].style.backgroundColor = colors[randomNumber];
});

// Nospiežot uz 6. pogas, 6.kvadrātā skaitlis sāk ik pa 3 sekundēm palielināties par 1.
// Kad tiek līdz 10, apstājas
buttons[5].addEventListener('click', () => {
  const intervalId = setInterval(() => {
    if (timerNumber === 10) {
      clearInterval(intervalId);
      return;
    }
    timerNumber++;
    blockText[1].innerHTML = timerNumber.toString();
  }, 3000);
});

// ospiežot uz 7. pogas, visi kvadrādi nomaina krāsu uz #18D5E1 un
// lapas background krāsa nomainas uz #000000
buttons[6].addEventListener('click', () => {
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = '#18D5E1';
  }
  body.style.backgroundColor = '#000000';
  changingText.style.color = '#FFFFFF';
});

// Uzliekot peli virs 1. kvadrāta, tam krāsa nomainas uz sarkanu
blocks[0].addEventListener('mouseenter', () => {
  blocks[0].style.backgroundColor = 'red';
});

blocks[0].addEventListener('mouseleave', () => {
  blocks[0].style.backgroundColor = 'darkcyan';
});

// EXTRA UZDEVUMI

//  Uzliekot peli virs 5. kvadrāta, ieslēdzas taimeris un skaita līdz 10,
// noņemot peli resetojas uz 0 un apstājas
blocks[5].addEventListener('mouseover', () => {
  timer = setInterval(() => {
    if (Number(blockText[2].textContent) >= 10) {
      clearInterval(timer);
    } else {
      blockText[2].textContent = (Number(blockText[2].textContent) + 1).toString();
    }
  }, 1000);
});

blocks[5].addEventListener('mouseout', () => {
  clearInterval(timer);
  blockText[2].textContent = '0';
});

// Rakstot tekstu input laukā, tas parādās arī zem inputa
document.getElementById('input').addEventListener('input', (e:Event) => {
  document.getElementById('resultText').textContent = (e.target as HTMLInputElement).value;
});
