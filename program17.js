var score =0;

for(var i=0; i<10; i++){
var l = parseInt(prompt("Enter any number between 1-6 :"));
var r = Math.floor(Math.random()*6) +1;

if(l >0 && l<7){
if(l==r){
    score = score - l;
    console.log("Negative Score " +"<br/>");
    console.log("Your score =" +score +"<br/>");
}
else{
    score = score +l;
    console.log("Positive Score " +"<br/>");
    console.log("Your Score =" +score +"<br/>");
}
}
else{
    console.log("Invalid Input. Enter number between 1-6.");
    i = i-1;
}
}
document.write("Your final Score is =" +score +"<br/>");
if(score > 40){
    document.write("You have won the match");
}
else{
    document.write("You have lost the match");
}
