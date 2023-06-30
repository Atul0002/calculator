var screen = document.querySelector(".screen");
var calculation = document.querySelector(".calculation");
var ans =  document.querySelector('.ans');

function handleClick(a){
    calculation.innerHTML += a;
    screen.style.backgroundColor = "aliceblue";
    screen.style.color = "black";

}
function reset(){
    calculation.innerHTML = "";
}
function answer(){
    let a = calculation.innerHTML.replace("x","*")
    ans.innerHTML = eval(a);    
    ans.style.backgroundColor = "aliceblue";
    ans.style.color = "black";
}