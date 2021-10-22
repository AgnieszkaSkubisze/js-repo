const squere = document.createElement('div');
document.body.appendChild(squere)
let size  = 100;
squere.style.width= size + "px";
squere.style.height= size + "px";
squere.style.backgroundColor= "blue"
document.body.style.backgroundColor = "pink"

//window.innerWidth * 0.5
let grow = true 

window.addEventListener("scroll",function(){
    if(grow){
        size  += 5
        squere.style.width = size + "px"
        squere.style.height= size + "px"; 
    }
    else {
        size  -= 5
        squere.style.width = size + "px"
        squere.style.height= size + "px"; 
    }

    if(size >= window.innerWidth/2){
        grow = !grow
    } else if (size <= 0 ){
        grow = !grow
    }
})