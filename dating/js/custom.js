 // Product slider js
 $(".about_slider").slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
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
        dots: false,
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
        dots: false,
        arrows: false,
        slidesToScroll: 1
      }
    }
  ]
});

 
 
 // Product slider js
 $(".review-slider").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    autoplay: true,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1399,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: true,
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
          dots: true,
          arrows: false,
          slidesToScroll: 1
        }
      }
    ]
  });

 // Product tab area
  $(document).ready(function() {
    $('.tabs li').click(function() {
      var tab_id = $(this).attr('data-tab');
      $('.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    })
  });


  // Modal tab area
  $(document).ready(function() {
    $('.modal-tabs li').click(function() {
      var tab_id = $(this).attr('data-tab');
      $('.modal-tabs li').removeClass('current');
      $('.modal-tab-content').removeClass('current');
      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    })
  });

 // Shrink header 
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 270) {
        $(".middle-header-area").addClass("shrink"),
        $(".middle-header-area").addClass("shadow")
      } else {
        $(".middle-header-area").removeClass("shrink"),
        $(".middle-header-area").removeClass("shadow")
      }
    });
  });

// Password Show 
  $(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

// Popup Show 
  var interval = null;
  $(function() {
       var interval = setInterval(function() {     
           $(".floating-btm-box").addClass("notify").delay(2000).queue(function(next) {
               $(this).removeClass("notify");
               next();
           });
       }, 6000);
 
       $('#closed-floatbox').click(function(){
           $(".floating-btm-box").removeClass("notify");
          clearInterval(interval);
       })
   });
 

  //  window.addEventListener('scroll', () => {
  //   document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  // }, false);