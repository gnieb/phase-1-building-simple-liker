// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const emptyHearts = document.querySelectorAll('.like-glyph')
const modal = document.getElementById('modal')



 for (item of emptyHearts) {
  item.addEventListener('click', (e) => {
  mimicServerCall()
  .then(() =>  {
    console.log(e)
    if (e.target.innerText === EMPTY_HEART) {
      console.log("changed to full heart")
      // const newClass = e.target.className 
      e.target.className = 'activated-heart'
      e.target.innerText= FULL_HEART
    }
    else if (e.target.innerText === FULL_HEART) {
      console.log("changed to empty heart")
      e.target.innerText = EMPTY_HEART 
      e.target.className = " "
    }
  })
  .catch(() => {
    modal.className = ' '
    setTimeout( errorMessage, 3000)
  })

 })
 }

 function errorMessage () {
  modal.className = 'hidden'


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
