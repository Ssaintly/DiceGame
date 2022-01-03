var x=0;
var k=0;


function chosen(v){
  x=v;
  document.getElementById('v').innerHTML= 'Selected variable: '+v;
  for(var i=1;i<=6;i++){
    if(i!=v){var s=document.getElementById(i);
    s.style.backgroundColor= "#ffffff00";}
  }
  var s=document.getElementById(v);
  s.style.backgroundColor= "#696969";}
  
  function rollDice(t) {
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach((die) => {
      toggleClasses(die);
      die.dataset.roll = t;
    });
  }

  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }

  // function countdown(){

  // }


function game(){var score=0; var scoreText;


setTimeout(() => {
    document.getElementById('win').innerHTML="Loading! Your Game Will Start In a Few Seconds";
  }, 1000);


t2_id=setInterval(()=>{
  // console.log(x);
  
  if(x===0){
    document.getElementById('v').innerHTML= 'Selected variable: '+x;
  }
  var dice = Math.floor(Math.random() * (6- 1 + 1) + 1);
  var txt="";

  var sec=4;
  ch=setInterval(() => {
    var m="The dice will roll in ";
      document.getElementById("win").innerHTML = m+sec + "s ";
      sec--;
    }, 1000);

  setTimeout(() => {
    clearTimeout(ch);
  }, 5000);
  
  l=setTimeout(()=>{rollDice(dice);},5000);

if(x===dice)
{
  k+=dice;
    score = 'Score: '+ k;
    setTimeout(()=>{document.getElementById('score').innerHTML=score;},2000);
    txt="Wow!Your Guess Was Correct :)";
   
}
else{
  txt="Shoot! This One Was a Wrong Guess :("
}
x=0;
setTimeout(()=>{console.log("chla"); document.getElementById('win').innerHTML=txt;},7000);
// console.log(r);
setTimeout(()=>{document.getElementById('win').innerHTML="";},10000);

},12500);
setInterval(() => {
  for(var i=1;i<=6;i++){
    {var s=document.getElementById(i);
    s.style.backgroundColor= "#ffffff00";}
  }
  
}, 12000);}

console.log(ch+" "+id);
function stop(){
  clearTimeout(ch);
  clearTimeout(l);
  clearTimeout(t2_id);
  setTimeout(()=>{
    document.getElementById('res').innerHTML="Bye! We will miss you...";
    document.getElementById('win').innerHTML="";
  },0);
}