
      const navbar_icon = document.querySelector(".navbar_icon");
      navbar_icon.addEventListener("click", function() {
        const body = document.body;
        body.classList.toggle("nav-open");
      });

      $(document).ready(function() {
        $(".banner_slider").slick({
          dots: false,
          infinite: true,
          arrows: false,
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [{
            breakpoint: 767,
            settings: {
              dots: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }]
        });
      });

      $(document).ready(function() {
        $(".pro_slider").slick({
          dots: false,
          infinite: true,
          arrows: false,
          autoplay: false,
          rtl: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [{
            breakpoint: 767,
            settings: {
              dots: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }]
        });
      });

      $(document).ready(function() {
        $(".testimonial_slider").slick({
          dots: false,
          infinite: true,
          arrows: false,
          autoplay: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          responsive: [{
            breakpoint: 767,
            settings: {
              dots: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }]
        });
      });




      $(document).ready(function() {
        $(window).scroll(function() {
          if ($(document).scrollTop() > 270) {
            $(".header_area").addClass("shrink")
          } else {
            $(".header_area").removeClass("shrink")
          }
        });
      });

