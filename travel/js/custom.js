 // Product slider js
 $(".banner_slider").slick({
  dots: false,
  infinite: true,
  arrows: true,
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
        dots: true,
        arrows: false,
        autoplay:false,
        slidesToScroll: 1
      }
    }
  ]
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
        $(".header-area").addClass("shrink")
      } else {
        $(".header-area").removeClass("shrink")
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

  // Current Time Show 
  $(document).ready(function() {
    function updateDateTime() {
        const now = new Date();
        
        // Get the current day of the week
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfWeek = daysOfWeek[now.getDay()]; // 0-6 (Sunday-Saturday)
        
        // Get the date components
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // Months are zero-based
        const day = now.getDate();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Format components into readable strings
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Update the HTML content
        $('#current-day').text(`${dayOfWeek}`);
        $('#current-date').text(`${formattedDate}`);
        $('#current-time').text(`${formattedTime}`);
    }

    // Update the date and time immediately
    updateDateTime();

    // Optionally, update every second
    setInterval(updateDateTime, 1000);
});

 // Product tab area
 $(document).ready(function() {
  $('.product-tab ul li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('.product-tab ul li').removeClass('current');
    $('.tab-area .tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
});

// Product tab area
$(document).ready(function() {
  $('.activities-tab ul li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('.activities-tab ul li').removeClass('current');
    $('.activities-area .tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
});


 // Review SLider
 $(".review_slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
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
        autoplay:false,
        slidesToScroll: 1
      }
    }
  ]
});
