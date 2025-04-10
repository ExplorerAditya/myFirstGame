//game 
let gameNum=25;
let num=prompt("Guess the game number");
while(num!=gameNum)
{
   num= prompt ("Wrong guess, try again");
}
alert("You guessed it right! The game number is " + gameNum);

