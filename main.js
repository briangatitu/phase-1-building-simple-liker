// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let message = document.getElementById("modal")
message.setAttribute('class', 'hidden')

like = document.getElementsByClassName("like")

for(let element of like){
  element.addEventListener("click", ()=>{
    mimicServerCall()
    .then(()=>{
      if (element.lastChild.innerHTML == EMPTY_HEART) {
        element.lastChild.setAttribute('class', 'activated-heart')
        element.lastChild.innerHTML = FULL_HEART;
      }
      else {
        element.lastChild.removeAttribute('class', 'activated-heart');
        element.lastChild.innerHTML = EMPTY_HEART;
      }

    })
    .catch((error)=>{
      message.removeAttribute('class','hidden')
      message.lastChild.textContent = error.message
      setTimeout(()=>{message.setAttribute('class', 'hidden')}, 3000)
    })

  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}