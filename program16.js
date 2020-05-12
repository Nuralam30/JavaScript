var won =0;
var lost =0;


for(var i=0; i<5; i++){
    var guessNumber = parseInt(prompt("Guess the number between 1-5:"));

    var randomNumber = Math.floor(Math.random()*5) + 1;

    if(guessNumber == randomNumber){
        console.log("You have won" +"<br/>" );
        won++;
    }
    else{
        console.log("You have lost. Random number was =" +randomNumber +"<br/>" +"<br/>");
        lost++;
    }
}

document.write("You have won =" +won +"times" +"<br/>");
document.write("You have lost =" +lost +"times");