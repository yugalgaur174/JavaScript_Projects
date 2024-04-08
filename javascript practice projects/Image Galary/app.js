let scrollContainer=document.querySelector(".galary")
let backBtn=document.getElementById("backBtn")
let nextBtn=document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft+=evt.deltaY;
    scrollContainer.style.scrollBehaviour="auto";

});

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehaviour="smooth";
    scrollContainer.scrollLeft+=300;
});
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehaviour="smooth";
    scrollContainer.scrollLeft-=300;
});