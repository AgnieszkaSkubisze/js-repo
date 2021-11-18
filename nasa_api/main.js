const btn = document.querySelector('button');
const input = document.querySelector("input");




const showMessage = (e) => {
    div.textContent = " "
    const text = e.target.value
   
    console.log(text)

 if (input != null){
     div.textContent= wrrong
    
 }

}

 async function sendAPIRequest(){
     let  API_KEY = '4rCD5fB01JP5acQc0XaZv2pvuUizl4zIuYNMqoGo'
     console.log('click')
let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
console.log(response)
   let data = await response.json()
       console.log(data)
   useApiData(data)
}
function useApiData(data){
document.querySelector('#content').innerHTML += data.explanation
document.querySelector('#content').innerHTML += `<img src = "${data.url}">`


}




input.addEventListener("input", showMessage)
btn.addEventListener('click', sendAPIRequest)
