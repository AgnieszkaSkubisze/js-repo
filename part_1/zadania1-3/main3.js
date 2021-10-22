let size = 10;
let orderElement =1; 

const init = () => {
    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    btnReset.textContent= "wyczysc"
    const ulElement = document.createElement('ul');
    ulElement.style.listStyle= 'none'
    btn.textContent = 'Dodaj 1000 elementow listy';
document.body.appendChild(btn)
document.body.appendChild(btnReset)
    btn.addEventListener('click',createElement)
    btnReset.addEventListener('click',clean)
    document.body.appendChild(ulElement)
    btn.style.fontSize = '20px'
    btnReset.style.fontSize = '20px'
    btn.style.backgroundColor= 'blue'
    btn.style.color= 'red'
    btnReset.style.color= 'purple'
    btnReset.style.backgroundColor= 'pink'

}
const clean = ()=> {
    document.querySelector('ul').textContent = ''
    size= 10
    orderElement=1
}
const createElement = ()=> {

    for(let i=0; i<10; i++){

        const li = document.createElement('li')
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize= `${size++}px`
        document.querySelector('ul').appendChild(li)

    }

}

init()