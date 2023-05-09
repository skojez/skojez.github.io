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
var navbar = document.getElementsByClassName("site-header");
function showMenu(){
  for(const nav of navbar){
    nav.style.display = "block";
  }
 
}

$(function() {
  $("#navigation").load("navigation.html");
});

$(function() {
  $("#footer").load("footer.html");
});

function hideMenu(){
  if($(window).width() <= 800){
    for(const nav of navbar){
      nav.style.display = "none";
    }
  }
}

$(window).on('resize', function() {
  if (window.innerWidth > 800) {
    for(const nav of navbar){
      nav.style.display = "block";
    }
  }else{
    for(const nav of navbar){
      nav.style.display = "none";
    }
  }
});



function fungsiDropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

function fungsiDropdown2(){
  document.getElementById("dropdown2").classList.toggle("show2");
}
function fungsiDropdown3(){
  document.getElementById("dropdown3").classList.toggle("show3");
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
      if (!event.target.matches('.test3')) {
        var dropdowns = document.getElementsByClassName("drop3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show3')) {
                    openDropdown.classList.remove('show3');
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

