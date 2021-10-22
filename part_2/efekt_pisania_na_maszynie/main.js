const span = document.querySelector('.text')
const cursor= document.querySelector('.cursor')
const txt = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`

let indexText = 0
let time = 20

const addLetter = () => {
    span.textContent += txt[indexText]

    indexText ++
    if (indexText == txt.length) clearInterval(indexTyping)
}



const cursorAnimation = () => {
    cursor.classList.toggle('active')
}
  
const indexTyping = setInterval(addLetter,time);
setInterval(cursorAnimation,400)
