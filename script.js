
function run(){
    job();
}

function job(){
    for(var i=0; i<10000; i++){
        console.log(i);
    }
}

function run2(){
    w = new Worker("./job.js");
}

function onload(){
    var div = document.getElementById("fancy-div");
    animate(div);
}

function animate(div){
    var divWidth = div.offsetWidth;
    var x = 0;
    var screenwidth = document.body.offsetWidth;
    var max = screenwidth - divWidth;

    move(div, x, max, "right");

    function move(div, x, max, direction){
        div.style.left = x+"px";
        var timeout = 5;
        
        if(direction == "left"){
            if(x == 0){
                setTimeout(function(){
                    move(div, x+2, max, "right");
                },timeout);
            }
            else{
                setTimeout(function(){
                    move(div, x-2, max, "left");
                },timeout);
            }
        }
        else if(direction == "right"){
            if(x == max){
                setTimeout(function(){
                    move(div, x-2, max, "left");
                },timeout);
            }
            else{
                setTimeout(function(){
                    move(div, x+2, max, "right");
                },timeout);
            }
        }
    }
}

