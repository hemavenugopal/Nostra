const offerHide = document.getElementById("offerHide")
const offer = document.querySelector(".offer")
offerHide.addEventListener("click", function(){
    offer.style.display = "none"
})
// Sidenav open and close
const menuIcon = document.getElementById("menu-icon");
const sidenav = document.querySelector(".sidenav");
const closeBtn = document.getElementById("close");

menuIcon.addEventListener("click", function() {
    sidenav.style.width = "250px"; // Open
    sidenav.style.overflow = 'auto';
});

closeBtn.addEventListener("click", function() {
    sidenav.style.width = "0"; // Close
    sidenav.style.overflow = 'hidden';
});

// const sliderContainer = document.querySelector(".slider_image_container")
// const rightArrow = document.getElementById("slider_right_activate")
// const leftArrow = document.getElementById("slider_left_activate")

// variables
// let currentSlide = 0
// const totalSlides = document.querySelectorAll(".slider-image").length // ✅ Fixed here

// function updateSlider() {
//     sliderContainer.style.marginLeft = `-${currentSlide * 100}vw`;
// }

// Click event for right arrow
// rightArrow.addEventListener('click', () => {
//     if (currentSlide < totalSlides - 1) {
//       currentSlide++;
//     } else {
//       currentSlide = 0; // Loop back to first image
//     }
//     updateSlider();
// });
  
// Click event for left arrow
// leftArrow.addEventListener('click', () => {
//     if (currentSlide > 0) {
//       currentSlide--;
//     } else {
//       currentSlide = totalSlides - 1; // Go to last image
//     }
//     updateSlider();
// });

