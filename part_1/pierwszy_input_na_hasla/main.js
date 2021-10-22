const input = document.getElementById('pass');
const div = document.querySelector('.message')
const passwords = ["ksiezniczka","paź","tajka"]
const messages = ["jest tylko jedna", "ma słuzyc krolowej", "jest genialna"]

input.addEventListener('input',(e)=>{
    div.textContent = " "
   // console.log(e.target.value)
const text = e.target.value

passwords.forEach( (password, index) =>{
if (password === text){
    div.textContent = messages[index]
    e.target.value = ''
}
})
})

input.addEventListener('focus', (e) =>{
e.target.classList.add('active')
})

input.addEventListener('blur', (e) =>{
    e.target.classList.remove('active')
    })


    /*   if(e.target.value === passwords){
       div.textContent = message
       e.target.value = ''
   } else {
       div.textContent = ''
   }*/