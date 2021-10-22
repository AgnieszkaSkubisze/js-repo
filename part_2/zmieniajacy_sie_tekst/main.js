
const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let activeLetter = -15;
let activeText = 0;


const addLetter = () => {

 if (activeLetter >= 0) {
  spnText.textContent += txt[activeText][activeLetter];
 }
 activeLetter++;
 if (activeLetter === txt[activeText].length) {

  activeText++;
  if (activeText === txt.length) return;

  return setTimeout(() => {
   activeLetter = -15;
   spnText.textContent = '';
   addLetter();
  }, 2000)


 }
 setTimeout(addLetter, 100)

}


addLetter();

const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);