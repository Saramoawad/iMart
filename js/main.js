var imgList=Array.from( document.getElementsByClassName("cat-img"));
var lightBoxContainer=document.querySelector(".lightBoxContainer")
var lightBoxItem=document.querySelector(".lightbox-item")
var currentIndex=0;
var nextButton=document.getElementById("next");
var prevButton=document.getElementById("prev");
var closeButton=document.getElementById("close");


for(var i=0;i<imgList.length;i++){
    imgList[i].addEventListener("click",function(e){
        currentIndex=imgList.indexOf(e.target);
        console.log(currentIndex);
        var imgSrc=e.target.getAttribute("src");
         lightBoxContainer.classList.replace("d-none","d-flex")
         lightBoxItem.style.backgroundImage=`url(${imgSrc})`
    })
}
function nextSlide(){
    currentIndex++;
     if(  currentIndex==imgList.length){
        currentIndex=0
    
     }
    var imgSrc=imgList[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`
}
function prevSlide(){
    currentIndex--;
     if(currentIndex==-1){
      currentIndex=imgList.length-1;
     }
    var imgSrc=imgList[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`
}

function closeSlide(){
    lightBoxContainer.classList.replace("d-flex","d-none")

}
nextButton.addEventListener("click" , nextSlide);
prevButton.addEventListener("click" , prevSlide );
closeButton.addEventListener("click" , closeSlide)

/*keyboard */
document.addEventListener("keydown",function(e){
if(e.key=="ArrowRight"){
    nextSlide();
}
else if(e.key=="ArrowLeft"){
    prevSlide();
}
else if(e.key=="Escape"){
   closeSlide();
}
})












