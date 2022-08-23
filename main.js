// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const userLike = document.getElementsByClassName('like-glyph')

for (const like of userLike) {
  like.addEventListener('click', likeHandler)
}

function likeHandler(e) {
  const heart = e.target
  mimicServerCall(url)
    .then(() => {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART
        heart.classList.add('activated-heart')
      } else {
        heart.innerText = EMPTY_HEART
        heart.classList.remove('activated-heart')
      }
    }).catch(error => {
      const modal = document.querySelector("#modal")
      modal.classList.remove("hidden")

      setTimeout(() => modal.className = "hidden", 3000)
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
