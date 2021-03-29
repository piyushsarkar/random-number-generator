function getRandomNumber(min,max){
var min = Number(document.getElementById('minval').value);
var max = Number(document.getElementById('maxval').value);

y=  Math.floor(Math.random() * (max - min + 1) ) + min;
document.getElementById("result").innerHTML=y;
}
