// <script>
  window.addEventListener('keydown', function(e) {
    console.log(e)
    const audio = document.querySelector(`audio[data-key='${keyCode}']`);
    const key = document.querySelector(`.key[data-key='${keyCode}']`);
    //selecting key class instead of audio

    if(!audio) return; //stop the func from running altogether
    audio.currentTime = 0; //resets audio to beginning 0th second. audio normally wont play if there's already an audio playing
    audio.play
  });
// </script>