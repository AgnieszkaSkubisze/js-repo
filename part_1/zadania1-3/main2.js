const button = document.querySelector('button')

const liItems = document.querySelectorAll('li')
let fontSIze = 10

button.addEventListener('click', function(){
    console.log('działa')
    fontSIze++
    for (let i=0; i<liItems.length ; i++){
        liItems[i].style.display = "block";
        liItems[i].style.fontSize = `${fontSIze}px`

    }
    
})