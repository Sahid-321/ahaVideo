var arrows = document.querySelectorAll(".arrow");
var movielist = document.querySelectorAll(".movie-list")

arrows.forEach((arrow,i)=>{
    var itemNumber =movielist[i].querySelectorAll("img").length;
    var clickCounter = 0;
    arrow.addEventListener("click",() =>{
        clickCounter++;
        if(itemNumber - (5 + clickCounter) >= 0){
            movielist[i].style.transform = `translateX(${
                movielist[i].computedStyleMap().get("transform")[0].x.value
            -170}px)`;
        }else{
            movielist[i].style.transform = "translateX(0)"
            clickCounter = 0;
        }
        
    })
    //console.log(movielist[i].querySelectorAll("img").length);
    
})



