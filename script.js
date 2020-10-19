var contentEle = document.body.querySelector(".content");

function makeHome(){
  contentEle.innerHTML=""
var headEle=document.createElement("h1");
  headEle.innerHTML="Home Page"
 contentEle.appendChild(headEle)
}

function makeAbout(){
  contentEle.innerHTML="";
  var blue = document.createElement("h1");
  blue.innerHTML="About Page"
  contentEle.appendChild(blue);
   var name=document.createElement("h3")
  name.innerHTML="Jonathan Lopez"
  contentEle.appendChild(name)
}

function makeInteract(){
  var number =0
  contentEle.innerHTML=""
  var blank = document.createElement("h1");
  blank.innerHTML="Interact"
  contentEle.appendChild(blank);
  var button= document.createElement("button")
  button.innerHTML="Counter"
  contentEle.appendChild(button)
  button.addEventListener("click", function(){
 number= number + 1 
    button.innerHTML= number   
})
  
}  
document.body.querySelector(".homeButt").addEventListener("click", function(){
  makeHome();
})

document.body.querySelector(".aboutButt").addEventListener("click", function(){
  makeAbout(); 
})

document.body.querySelector(".interactButt").addEventListener("click", function(){
  makeInteract();
})



 contentEle.innerHTML=""
var headEle=document.createElement("h1");
  headEle.innerHTML="Home Page"
 contentEle.appendChild(headEle)