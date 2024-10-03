let slides = document.getElementsByClassName("slider-container")
let sliderIndex = 1;

// function to show slide, 

function showSlide(n) {
    let i;
   //    this will allow a smooth looping when we get to the last slide (while clicking next) and the first slide(while clicking prev) 

    if (n > slides.length) {  //for next
            sliderIndex = 1  
        }
    
        if (n < 1) {
            sliderIndex = slides.length
     }
    
    
//   loop through the array of slides and apply the styling 
   
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    slides[sliderIndex - 1].style.display = 'block'


}

// function to handle the direction of the button
function handleButton(Btn) {
    if (Btn === 'next') {
        console.log("****Next Button Clicked******");
        
        showSlide(sliderIndex += 1)
    } else 
    if (Btn === "prev") {
        console.log("****Prev Button Clicked*****"); 
        showSlide(sliderIndex -= 1)
        
    }
}
showSlide(1) // allow us to see the first slide on refresh because we alreadyy set the display for all the slides to be none .