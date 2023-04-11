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
  navbar.style.right = "0";
}
function hideMenu(){
  navbar.style.right = "-400px";
}
    
function fungsiDropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
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
}

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

