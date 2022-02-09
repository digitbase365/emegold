// **********Hero Text Typewriter Effect
const Typewriter = function(txtElement, words, wait = 3000){
  this.txtElement = txtElement
  this.words = words
  this.txt = ''
  this.wordIndex = 0
  this.wait = parseInt(wait, 10)
  this.type()
  this.isDeleting = false

}

// Type Method
Typewriter.prototype.type = function(){ 
  // Current index of word
  const current = this.wordIndex % this.words.length 
  // Get full text of currentv word
  const fullTxt = this.words[current] 

  // Check if deleting
  if(this.isDeleting){
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1)

  }else {
    // Add Char
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  }

  // Indert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

  // Type Speed
  let typeSpeed = 300

  if(this.isDeleting){
    typeSpeed /= 4
  }

  // If word is complete
  if(!this.isDeleting && this.txt === fullTxt){
    // Make pause at end
    typeSpeed = this.wait
    // Set deleting to true
    this.isDeleting = true 
  } else if(this.isDeleting && this.txt === ''){
    this.isDeleting = false
    // Move to next word
    this.wordIndex++
    // Pause before start typing
    typeSpeed = 500
  }

  setTimeout(() => this.type(), typeSpeed)
}


// Init on DOM Load
document.addEventListener('DOMContentLoaded', init)


// Init App
function init(){
  const txtElement = document.querySelector('.txt-type')
  const words = JSON.parse(txtElement.getAttribute('data-words'))
  const wait = txtElement.getAttribute('data-wait')

  // Init Typewriter
  new Typewriter(txtElement, words, wait)

}

// ********** End of Hero Text Typewriter Script






// **************Contact Form Script
const inputs = document.querySelectorAll('.input');

function focusFunc(){
  let parent = this.parentNode;
  parent.classList.add('focus')

}
function blurFunc(){
  let parent = this.parentNode;
  if(this.value == ""){
  parent.classList.remove('focus')
  }

}

inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);

})

// **************End of Contact Form Script
