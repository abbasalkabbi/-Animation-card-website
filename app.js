//declare

const container=document.querySelector('.container');
const card=document.querySelector('.card');
const image=document.querySelector(".image");
const content=document.querySelector(".content");
const footer=document.querySelector("footer");
var size=100;
//pc move moues

container.addEventListener('mousemove',e=>{
  
  let pagex=(window.innerWidth/2 -e.pageX)/10;
  let pagey=(window.innerHeight/2 -e.pageX)/10;
  card.style.transform=`rotateY(${pagex}deg) rotateY(${pagey}deg)`;
  image.style.transform=`rotate(-60deg)  translateZ(${size}px) `;
  content.style.transform=`  translateZ(${size}px) `;
  footer.style.transform=`  translateZ(${size}px) `;
  
})
// restart 
container.addEventListener('mouseleave',e=>{
    var size=100;
  let pagex=(window.innerWidth/2 -e.pageX)/10;
  let pagey=(window.innerHeight/2 -e.pageX)/10;
  card.style.transform=``;
  image.style.transform=`rotate(0)  translateZ(0) `;
  content.style.transform=`  translateZ(0px) `;
  footer.style.transform=`  translateZ(0px) `;
  
})



