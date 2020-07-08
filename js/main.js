// Waiting For Html to be parse and Css to not block a script
window.addEventListener('DOMContentLoaded', function() {
  // Custom Navbar Menu
  const iconToggler = document.querySelector('#icon-toggler');
  const icon = document.querySelector('#icon');
  const navbarMenu = document.querySelector('.navbar-nav');
  // Navbar Event Listener
  iconToggler.addEventListener('click', ShowHideNav);
  // Custom Navbar Function When Menu Toggler Is Clicked
  function ShowHideNav(){
    if(icon.classList.contains('fa-bars')){
      // Icon Change
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      // Show NavMenu
      navbarMenu.classList.remove('passive-nav');
      navbarMenu.classList.add('active-nav');
    } else {
      // Icon Change When Clicked Again
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times')
      // Hide NavMenu When Clicked Again
      navbarMenu.classList.remove('active-nav');
      navbarMenu.classList.add('passive-nav');
    }

  }
})

// Image Carousel
const AllBannerSlides = document.querySelectorAll('.banner-slides');
// Buttons
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

// Show Next Slide Function
const MoveToNextSlide = function() {
  // Get the class that we've created and that is the active-slide
  const activeSlide = document.querySelector('.active-slide');
  // Remove the active-slide to our current banner slide when next button is clicked
  activeSlide.classList.remove('active-slide');
  // DIto naman gagamit tayo ng if sa active slide natin para malaman natin kung yung current state nya na banner slide ay may kasunod pang kagaya nyang element
  if(activeSlide.nextElementSibling){
    // Pag true na meron kasunod na element sibling na kagaya nung class na banner slides dun natin ilalagay dapat ang active-slides
    activeSlide.nextElementSibling.classList.add('active-slide');
  } else {
    // Tapos ang else natin pag nareach na natin yung kahuli hulihan ng element na banner-slides balik tayo sa una ulit
    AllBannerSlides[0].classList.add('active-slide');
  }
}
// Show Prev Slide Function
const MoveToPrevSlide = function() {
  // Get the class that we've created and that is the active-slide
  const activeSlide = document.querySelector('.active-slide');
  // Remove the active-slide to our current banner slide when next button is clicked
  activeSlide.classList.remove('active-slide');
  // DIto naman gagamit tayo ng if sa active slide natin para malaman natin kung yung current state nya na banner slide ay may kasunod pang kagaya nyang element
  if(activeSlide.previousElementSibling){
    // Pag true na meron kasunod na element sibling na kagaya nung class na banner slides dun natin ilalagay dapat ang active-slides
    activeSlide.previousElementSibling.classList.add('active-slide');
  } else {
    // Tapos ang else natin pag nareach na natin yung kahuli hulihan ng element na banner-slides balik tayo sa una ulit
    AllBannerSlides[AllBannerSlides.length - 1].classList.add('active-slide');
  }
}
// Event Listener For Next Button Dito naman dito natin iiinvoke yung ginawa nating function sa loob ng eventlistener 
nextButton.addEventListener('click', function() {
  MoveToNextSlide();
})
// Event Listener For Prev Button Dito naman dito natin iiinvoke yung ginawa nating function sa loob ng eventlistener 
prevButton.addEventListener('click', function() {
  MoveToPrevSlide();
})