(function() {
  window.addEventListener('keydown', playSound);

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}" ]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}" ]`);
    const keys = document.querySelectorAll('.key');
    if (!audio) return;
    key.classList.add('playing');
    keys.forEach(key =>
      key.addEventListener('transitionend', removeTransition)
    );

    function removeTransition(e) {
      if (e.propertyName !== 'transform') return;
      this.classList.remove('playing');
    }
    audio.currentTime = 0; // rewind to the start
    audio.play();
  }
})();
