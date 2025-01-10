
// Nav area js   
// const navbar_icon = document.querySelector(".navbar_icon");
// navbar_icon.addEventListener("click", function() {
//   const body = document.body;
//   body.classList.toggle("nav-open");
// });


// Award slideer js
$(".award_slider").slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  fade: false,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [{
      breakpoint: 1399,
      settings: {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        dots: false,
        arrows: false,
        slidesToScroll: 1
      }
    }
  ]
});

// Review slider js
$(".review_slider").slick({
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
        dots: false,
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

// Blog slider js
$(".blog_slider").slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  fade: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1399,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: false,
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


// Gallery load more js   
$(document).ready(function(){
  $(".content").slice(0, 3).show();
  $(".view_more_btn").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 4).slideDown();
    if($(".content:hidden").length == 0) {
      $(".view_more_btn").text("No Content").addClass("noContent");
    }
  });
})


