//selecting the id menu-btn and class navbar from the html and storing it in our newly made menu variable
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

  // making the navlinks active when the respective section is visited
  //calling all the navlinks form the navbar
  const navLinks = document.querySelectorAll('.navbar a');

//aba preloader bata page link garam
 //pahila preloader class lai select gariyo
const preloader = document.querySelector(".preloader");

//jaba button click hunxa jun ki menu bhanne variable ma cha taba talako code chalxa
menu.onclick = () =>{

    // checking if fa-times ra active chaki nai ani cha bhane hataune chaina bhane dekhaune
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//jaba scroll garinxa talako code execute hunxa
window.onscroll = () =>{

    // remove gardini fa-times ra active bhanne icon scroll bhayexi
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

//jaba page bhitra ko sabai image ani file haru load hunxa ani talako code chalxa
window.addEventListener("load", function () {
    setTimeout(function() { //YO FUNCTION banara 0.7s ko delay lagako preloader dekhina lai
      preloader.classList.add("hide");


      // Remove the preloader from the DOM after 0.7s 
      setTimeout(function() {
        preloader.parentNode.removeChild(preloader);
      }, 700); // 0. seconds
    }, 700); // 0.7 seconds
  });

// Event Listener lako jaba scroll ra resize hunxa taba talako code execute hunxa
window.addEventListener('scroll', highlightActiveLink);
window.addEventListener('resize', highlightActiveLink);

// aba euta function banaune jasle active link highlight garna sakum
function highlightActiveLink() {

  // Get the current scroll position and viewport dimensions
  const scrollPosition = window.scrollY; //current scroll position lai ligem pahila
  const viewportHeight = window.innerHeight; //current viewport dimension lai ligeko

  //aba hamle banako navlinks variable jasma sabai links chan tesma loop lagaune
  // Loop through each section
  for (const link of navLinks) {
    const sectionId = link.getAttribute('href').substring(1); //abas hamle tyo section ko id lai call gareko href use garera ani # hatauna lai substring(1) gareko
    const section = document.getElementById(sectionId); //ani banako sectionId lai call garem

    // Check if the section is in the viewport
    const sectionTop = section.offsetTop; //getting the section top dimensions using offsetTop property
    const sectionHeight = section.offsetHeight; //getting the section height using offsetHeight
    const sectionBottom = sectionTop + sectionHeight; //calculating the total height ie (distance from the top edge of the document to the bottom edge of the section)

    //checking if the section is available in the viewport
    if (
      scrollPosition >= sectionTop - viewportHeight * 0.5 && //checking if the scroll position is greater then or equal to the top boundary of the section within the viewport
      scrollPosition < sectionBottom - viewportHeight * 0.5 //checking if the scroll position is less than the bottom boundary of the section within the viewport
    ) {
      // Add an "active" class to the link
      link.classList.add('active');
    } else {
      // Remove the "active" class from the link
      link.classList.remove('active');
    }
  }
}



