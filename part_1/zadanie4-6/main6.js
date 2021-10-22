


document.body.addEventListener('click',function(e){
console.log("klik")
    const clientX = e.clientX
    const clientY = e.clientY

    const sumOfClients = clientX+clientY

    if (sumOfClients %2 ==0){
        document.body.style.backgroundColor = `red`
    } else if (sumOfClients %2 !==0){
        document.body.style.backgroundColor = `cadetblue`
    }else if (clientY%2 ==0 && clientX %2 !==0){
        document.body.style.backgroundColor = `green`
    }else if (clientY%2 !==0 && clientX %2 ==0){
        document.body.style.backgroundColor = `green`
    }
    console.log(clientX)
    console.log(clientY)
    console.log(sumOfClients)
})