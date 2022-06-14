window.addEventListener('keydown', function(e) {
  // selecting the audio element of the drums using the custom attribute tag
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // selecting the key values from the drum kit using the class name.
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(audio)
  if(!audio) return;  // stop the function from running all together
  audio.currentTime = 0; // rewind the playing auto to the start
  audio.play();
  console.log(key)
})
