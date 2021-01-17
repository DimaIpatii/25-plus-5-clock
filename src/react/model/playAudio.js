export const playAudio = (play) => {
    let audio = document.getElementById("beep");
  
    if (play) {
      audio.play();
      audio.currentTime = 0;
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };
  