const rady = []
const h1 = document.querySelector('h1')

const addRada = (e) => {
e.preventDefault();

const input = document.querySelector('input');
const newRada = input.value

if (input.value.length){
    rady.push(newRada)
    input.value = ' '
    }

}
const showRada = (e) => {
 
    const randomRada = Math.floor(Math.random() * rady.length)
    h1.textContent = ` Twoja rada to  :   ${rady[randomRada]}`
    
}

const showTablica = (e) => {
   alert(rady)
}


document.querySelector('button').addEventListener('click', addRada)
document.querySelector('.showAdvice').addEventListener('click', showRada)
document.querySelector('.showOptions').addEventListener('click',showTablica)