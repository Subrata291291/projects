<?php ob_start(); ?>
<!DOCTYPE html>
<html <?php  language_attributes(); ?> >
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title><?php bloginfo('name'); ?><?php wp_title(); ?></title>
    <meta name="description" content="">
    <meta name="robots" content="noindex, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="og:title" content="<?php bloginfo('name'); ?><?php wp_title(); ?>">
    <meta property="og:description" content="<?php bloginfo('name'); ?><?php wp_title(); ?>">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image" content="<?php bloginfo('template_directory'); ?>/images/favicon.png">

    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <!-- Bootstrap 5 -->
    <!--font aswome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!--font aswome -->
    <!-- Stylesheets -->
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/sass/main.css">
    <!-- Stylesheets -->
     <!--Slick css-->
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory'); ?>/sass/slick.css">
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory'); ?>/sass/slick-theme.css">
    <!--Slick css-->
    <!--aos css-->
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory'); ?>/sass/aos.css">

<?php wp_head(); ?>

</head>


<body>

  <!--header area-->
    <header>
      <section class="top-header text-center">
        <div class="container">
          <p>
            This demo is reset every 24 hours!
          </p>
        </div>
      </section>
      <section class="middle-header-area text-center">
        <div class="container">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="images/site-logo.png" alt="logo">
              </a>
              <button data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="background-color: transparent; border: none;">
                <line class="line1"></line>
                <line class="line2"></line>
                <line class="line3"></line>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Members</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Profile</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Users Story</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Testimonials</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                  </li>
                  <li class="nav-item">
                    <button class="nav-link common-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Login / Register</button>
                  </li>
                  <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li> -->
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </header>
  <!--header area-->
