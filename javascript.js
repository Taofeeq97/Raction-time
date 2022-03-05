


window.onload = appear();
var appearTime;
var clickTime;
function disappear(){
document.getElementById("shape").style.display="none";
clickTime=Date.now();
var reactionTime=(clickTime-appearTime)/1000;
if (reactionTime<1){
document.getElementById("showTime").innerHTML="Your Reaction was Fast!: " + reactionTime+" seconds. Amazing!";
}else if (reactionTime>1 && reactionTime<4){
document.getElementById("showTime").innerHTML="Your Reaction was Average: " + reactionTime+" seconds you can do better!";
}else{
document.getElementById("showTime").innerHTML="Poor reaction: " +reactionTime+" seconds don't be a dummy";
}
var randomDelay=((Math.random()*3)+2)*1000;
setTimeout(appear, randomDelay);

}


function appear(){
var randomTop=Math.random()*400;
var randomLeft=Math.random()*400;
var randomHeight=Math.random()*200+10;
var randomWidth=Math.random()*200+10;
var randomCurve= Math.random();
var randomColor="#" + ((1<<24)*Math.random() | 0).toString(16);
if (randomCurve < 0.5){
document.getElementById("shape").style.borderRadius=25+'px';
}else{
document.getElementById("shape").style.borderRadius=0+'px';
}
document.getElementById("shape").style.top=randomTop+"px";
document.getElementById("shape").style.left=randomLeft+"px";
document.getElementById("shape").style.height=randomHeight+"px";
document.getElementById("shape").style.width=randomWidth+"px";
document.getElementById("shape").style.display="block";
document.getElementById("shape").style.backgroundColor=randomColor;
appearTime=Date.now();

}