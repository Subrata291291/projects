// Modal area js
$(window).ready(function() {
  setTimeout(function() {
    $('#myModal').modal("show")
  }, 10000)
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


// Nav area js   
$(function(){
  const navbar_icon = document.querySelector(".navbar_icon");
  navbar_icon.addEventListener("click", function() {
  const body = document.body;
  body.classList.toggle("nav-open");
});
});

// Banner slideer js
$(".banner_slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: false,
  fade: true,
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



// product slider js
$(".testimonial_slider").slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1199,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// offer slider js
$(".courses_slider").slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: false,
  fade: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1199,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});

// offer slider js
$(".testimonial_slider").slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: false,
  fade: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1199,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});




// Tab area js
$(document).ready(function() {
  $('ul.tabs li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
});

//Counter Js//
$(window).on("load resize",function() {

  var counters = $(".count h4");
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

