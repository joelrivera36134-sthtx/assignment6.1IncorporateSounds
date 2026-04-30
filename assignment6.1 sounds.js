
var intervalID = 0; // Stores the ID of the timer so we can stop it later
var startTop = 90; // Starting vertical position 
var startLeft = 20; // Starting horizontal position 
/*var change = 100; // Unused variable from previous version*/

/*var intervalID = 0;
startTop =100;
startLeft = 100;
var change = 100;*/

var dleft = 5;
var dtop = 5;

var startBtn = document.getElementById("startMove");
startBtn.style.backgroundColor = "green";
startBtn.style.color = "white";
startBtn.style.padding = "10px 20px";
startBtn.style.fontWeight = "bold";
startBtn.style.borderRadius = "15px";


var stopBtn = document.getElementById("stopMove");
stopBtn.style.backgroundColor = "red";
stopBtn.style.color = "white";


function startInterval()

{
    
    intervalidID = setInterval(moveIT, 100);
    play();
    

}

function moveIT()
{
    var imageDude = document.getElementById("imgDude");

    imageDude.style.width = "200px";
    imageDude.style.height = "200px";
    imageDude.style.top = startTop + "px";
    imageDude.style.left = startLeft + "px";
    change +=5;
    document.getElementById("msg").innerHTML = " top = " + imageDude.style.top + "left = " + imageDude.style.left;

    if ((startLeft + imageDude.width >= window.innerWidth) || (startLeft <=0))
    {    dleft = -dleft;
    }
        if ((startTop + imageDude.height >= window.innerHeight) || (startTop <=0))
        {
            dtop= -dtop;
        }
        startTop += dtop;
        startLeft += dleft;
}
function stopInterval()
{
    
    clearInterval(intervalidID);
    stop();
    
}

