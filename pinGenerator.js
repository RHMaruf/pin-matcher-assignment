
document.getElementById("generateButton").addEventListener("click",function(){
    var random = 0;
    while(random<1000){
        random = Math.round(Math.random()*10000);
    }
    document.getElementById("generatedPin").value = random;
    var tryLeft = Number(document.getElementById("tryLeft").innerText);
    if(tryLeft) document.getElementById("submit").disabled = false;
    
    document.getElementById("match").style.display = "none";
    document.getElementById("notMatch").style.display = "none";
});

var numberButtons = document.getElementsByClassName("number");
for(var i=0;i<numberButtons.length;i++){
    numberButtons[i].addEventListener("click",function(){
       var inputPin = document.getElementById("pinInput");
       inputPin.value = String(inputPin.value)+this.innerText;
    })
}

document.getElementById("back").addEventListener("click",function(){
    var inputPin = document.getElementById("pinInput").value;
    if(inputPin.length > 0){
        document.getElementById("pinInput").value = String(inputPin).slice(0,-1);
    }
});

document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("pinInput").value = "";
});

document.getElementById("submit").addEventListener("click",function(){
    var generatedPin = document.getElementById("generatedPin").value;
    var inputPin = document.getElementById("pinInput").value;

    if(generatedPin === inputPin){
        document.getElementById("match").style.display = "block";
        document.getElementById("notMatch").style.display = "none";
        document.getElementById("tryLeft").innerText = 3;
    }else{
        document.getElementById("match").style.display = "none";
        document.getElementById("notMatch").style.display = "block";
        var tryLeft = Number(document.getElementById("tryLeft").innerText);
        if(!--tryLeft) document.getElementById("submit").disabled = true;
        document.getElementById("tryLeft").innerText = tryLeft;
    }
    
});



