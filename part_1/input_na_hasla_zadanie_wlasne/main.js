// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const div = document.querySelector('.message')
const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]
let wrrong = 'nie masz dostepu'

const showMessage = (e) => {
    div.textContent = " "
    const text = e.target.value
   
    console.log(text)

 
 passwords.forEach( (password, index) =>{
    
 if (password.toUpperCase() === text.toUpperCase()){
     div.textContent = messages[index]
     e.target.value = ''
 }  else if (password.toLowerCase() === text.toLowerCase){
    div.textContent = messages[index]
     e.target.value = '' 
 } else {
    div.textContent = wrrong
 }
})

}

input.addEventListener("input", showMessage)
