const lineNav = document.querySelectorAll("nav a");
const lineDiv = document.querySelector(".underline");

console.dir(lineDiv);

lineNav.forEach((El)=>{
  El.addEventListener("click",(event)=>{
    lineDiv.style.width = event.currentTarget.offsetWidth+"px";
    lineDiv.style.left = event.currentTarget.offsetLeft+"px";
    lineDiv.style.top = event.currentTarget.offsetTop +event.currentTarget.offsetHeight+"px" ;
  });
});