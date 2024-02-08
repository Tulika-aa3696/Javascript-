let btn = document.querySelector('button');
let inp=document.querySelector('input');
let list=document.querySelector('ul');
btn.addEventListener('click',function(){
    item=document.createElement("li");
    item.textContent=inp.value;
    let dlt=document.createElement('button');
    dlt.textContent="Delete";
    item.append(dlt);
    list.appendChild(item);
    inp.value=" ";
    
});
let parent=document.querySelector('ul');
parent.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON')
    {
        event.target.parentElement.remove();
        console.log("clicked");
    }
    
});