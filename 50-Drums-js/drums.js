function playSound(e){
  // selecting the audio element of the drums using the custom attribute tag
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // selecting the key values from the drum kit using the class name.
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(audio)
  if(!audio) return;  // stop the function from running all together
  audio.currentTime = 0; // rewind the playing auto to the start
  audio.play();
  // console.log(key)
  // adding playing class
  key.classList.add('playing');
}


window.addEventListener('keydown', playSound)

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Selecting all the keys
const keys = document.querySelectorAll('.key');
// console.log(keys)
// each key of the keys list, will have a remove transition class
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

