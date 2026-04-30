var firstSound
// every sound needs to have a play function//
function play()
{
  firstSound = new sound ("audio/Dark Industrial Ambience.wav");
  firstSound.play();
  
}
//helper function//

function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src =src;
    this.play = function() {this.sound.play();};
    // if the play helper function is used for play function, can the pause help the stop function
    this.stop = function() {this.sound.pause();};
}

function stop()
   {
   // using if statement to write condition so the first sound will stop when stop button is hit.
    if (firstSound)
    {
    
       firstSound.stop();
       
    }
    // instead of its own function/button placed second sound within the stop function/button to play upon stopping first sound
   var secondSound = new sound("audio/VOXMale_Announcer Vocal Male Dry Game Statement Objective Completed 04_ESM_SGAV.wav");
       secondSound.play();
       // reload line was stopping first sound and picture but would not allow second sound to play.
       //window.location.reload();
    
   }
