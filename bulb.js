let flag=0;
let bulbStatus=document.querySelector("#status");
let modestatus=document.querySelector("#mode");
let background=false;
function on(){
    let bulb=document.querySelector("#bulb");
    if(flag==0){
        bulb.style.backgroundColor="yellow";
        flag=1;
        bulbStatus.style.color="green";
      bulbStatus.innerHTML="bulb is on";
    }
}

function off(){
    let bulb=document.querySelector("#bulb");
    if(flag==1){
        bulb.style.backgroundColor="transparent";
        flag=0;
        bulb.style.borderColor = "black";
        bulbStatus.style.color="red";
        bulbStatus.innerHTML="bulb is off";
    }
}
function mode(){
    if (background) {
        // Light mode
        document.body.style.backgroundColor = "white";
        modestatus.style.backgroundImage = "url('darkmode.png')"; // Change to white mode image
        background = false;
    } else {
        // Dark mode
        document.body.style.backgroundColor = "black";
        modestatus.style.backgroundImage = "url('whitemode.png')"; // Change to dark mode image
        background = true;
}
}
