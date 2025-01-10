
// Nav area js   
// const navbar_icon = document.querySelector(".navbar_icon");
// navbar_icon.addEventListener("click", function() {
//   const body = document.body;
//   body.classList.toggle("nav-open");
// });


// Banner slider js
$(".banner_slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: false,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1399,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        slidesToScroll: 1
      }
    }
  ]
});

// Review slider js
$(".service_slider").slick({
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: false,
  fade: false,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [{
      breakpoint: 1399,
      settings: {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        slidesToScroll: 1
      }
    }
  ]
});

// Blog slider js
$(".project_slider").slick({
  dots: false,
  centerMode: true,
  infinite: true,
  arrows: true,
  autoplay: true,
  fade: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1399,
      settings: {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        slidesToScroll: 1
      }
    }
  ]
});


// Header js   
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 270) {
      $(".header_area").addClass("shrink")
    } else {
      $(".header_area").removeClass("shrink")
    }
  });
});


// Function to open the form
// function openForm() {
//   document.getElementById("search-modal").style.display = "block";
// }

// Function to close the form
// function closeForm() {
//   document.getElementById("search-modal").style.display = "none";
// }

// Search box open function
$(document).ready(function(){
  // When the button is clicked
  $("#search-btn").click(function(){
    // Show the hidden div
    $("#search-modal").slideDown(500);
    // Add a new class to the div
    $("#search-modal").addClass("opened");
  });
});

$(document).ready(function(){
  // When the button is clicked
  $("#close-modal").click(function(){
    // Show the hidden div
    $("#search-modal").slideUp(500);
    // Add a new class to the div
    $("#search-modal").removeClass("opened");
  });
});
// Search box open function

//Counter Js//
$(window).on("load resize",function() {

  var counters = $(".count h5");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, );
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});
//Counter Js//