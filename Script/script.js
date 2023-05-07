// const upIcon = document.getElementsByClassName("upIcon")[0]

// function upIconHandler() {
//     window.addEventListener("scroll", () => {
//         let windowHeight = document.documentElement
//         var top = (window.pageYOffset || windowHeight.scrollTop)- (windowHeight.clientTop || 0)
//         console.log(top)
//         if (windowHeight < 500) {
//             upIcon.style.display = "none"
//         } else {
//             upIcon.style.display = "block"
//         }
//     })
// }
// upIconHandler()

// Navbar
var navbar = document.getElementById("myNavbar");
function showMenu(){
  navbar.style.display = "block";

}

$(function() {
  $("#navigation").load("navigation.html");


  
});

function hideMenu(){
  if($(window).width() <= 800){
    navbar.style.display = "none";
  }
}

$(window).on('resize', function() {
  if (window.innerWidth > 800) {
     navbar.style.display = "block";
  }else{
    navbar.style.display = "none"
  }
});



function fungsiDropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

function fungsiDropdown2(){
  document.getElementById("dropdown2").classList.toggle("show2");
}

window.addEventListener('click', function(event){
  if (!event.target.matches('.test')) {
    var dropdowns = document.getElementsByClassName("drop");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.test2')) {
      var dropdowns = document.getElementsByClassName("drop2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show2')) {
                  openDropdown.classList.remove('show2');
              }
          }
      }
});


// Carousel
$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  dots: true,
  items: 1,
})

