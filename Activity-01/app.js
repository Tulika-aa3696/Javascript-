function generateRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let value=`rgb(${red},${green},${blue})`;
    return value;
}

let btn=document.querySelector('button');
btn.addEventListener("click",function(){
    let result=generateRandomColor();
    let heading=document.querySelector("h1");
    heading.innerText=result;
    heading.style.color=result;
    let box=document.querySelector("div");
    box.style.backgroundColor=result;
});