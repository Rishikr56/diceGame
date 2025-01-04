const p1 = Math.floor(Math.random()*6 + 1);
const p2 = Math.floor(Math.random()*6 + 1);

console.log(p1);
console.log("p2")
console.log(p2);

if(p1 == 1){
    document.querySelector('.img1').src = "./images/dice1.png";
}
if(p1 == 2){
    document.querySelector('.img1').src = "./images/dice2.png";
}
if(p1 == 3){
    document.querySelector('.img1').src = "./images/dice3.png";
}
if(p1 == 4){
    document.querySelector('.img1').src = "./images/dice4.png";
}
if(p1 == 5){
    document.querySelector('.img1').src = "./images/dice5.png";
}
if(p1 == 6){
    document.querySelector('.img1').src = "./images/dice6.png";
}


if(p2 == 1){
    document.querySelector('.img2').src = "./images/dice1.png";
}
if(p2 == 2){
    document.querySelector('.img2').src = "./images/dice2.png";
}
if(p2 == 3){
    document.querySelector('.img2').src = "./images/dice3.png";
}
if(p2 == 4){
    document.querySelector('.img2').src = "./images/dice4.png";
}
if(p2 == 5){
    document.querySelector('.img2').src = "./images/dice5.png";
}
if(p2 == 6){
    document.querySelector('.img2').src = "./images/dice6.png";
}


if(p1 > p2){
    //player1 win
    document.querySelector('h1').innerText = "🚩 Player 1 win";
}
else{
    document.querySelector('h1').innerText = "Player 2 win 🚩 ";
}