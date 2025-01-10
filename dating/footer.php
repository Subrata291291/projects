    <!--Footer area-->
    <footer class="p-80">
      <div class="container">
        <div class="footer-box d-md-flex">
          <div class="footer-1">
            <img src="<?php bloginfo('template_directory'); ?>/images/site-logo-footer.png" alt="">
            <p>
              WP Matrimony helps you find your perfect soulmate. Join today and start searching for your partner right away.
            </p>
            <ul class="d-flex">
              <li>
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
              </li>
            </ul>
          </div>
          <div class="footer-content">
            <h3>Quick Menu</h3>
            <ul>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="footer-content footer-content-2">
            <h3>Contact Details</h3>
            <ul class="footer-address">
              <li>
                <a href="#">Sunset Lake RoadSuite B-2 , Newark, Delaware -19702, USA</a>
              </li>
              <li>
                <a href="mailto:presale@wpdating.com">presale@wpdating.com</a>
              </li>
              <li>
                <a href="tel:+1 217 650 2736">+1 217 650 2736</a>
              </li>
            </ul>
          </div>
          <div class="footer-content footer-content-3">
            <h3>Subscribe To Newsletter</h3>
            <ul>
              <li>
                <p>
                  Be the first one to know about out new features, updates and many more.
                </p>
              </li>
            </ul> 
            <form action="" class="">
              <input type="email" class="" required placeholder="info@gmail.com">
              <button type="submit" value=""><i class="fa-regular fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
        <div class="footer-copyright">
          <ul class="d-md-flex">
            <li>
              <p>
                Copyright © 2024 Relish Dating. All rights reserved.
              </p>
            </li>
            <li>
              <a href="#">FAQ</a>
              <a href="#">Privacy &amp; Policy</a>
              <a href="#">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <!--Footer area-->

    

    <!--Floating Message-->
    <div class="floating-btm-box">
      <div class="floating-sub-box">
        <div class="custom-close-n" id="closed-floatbox"><img class="" alt="" src="<?php bloginfo('template_directory'); ?>/images/close-icon.png">
        </div>
          <img class="elIMG ximg" alt="" src="<?php bloginfo('template_directory'); ?>/images/User-Story-600x853.jpg" width="200" height="200">
          <div class="content">
              <strong><span id="leadname"></span></strong> Just Connected <strong>With Each other</strong> from <strong><span id="leadlocation">Burdwan</span></strong>
          </div>
      </div>
    </div>
    <!--Floating Message-->

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
              <ul class="modal-tabs d-flex justify-content-center">
                <li class="modal-tab-link current" data-tab="login">
                  <p><span>Login</p>
                </li>
                <li class="modal-tab-link" data-tab="register">
                  <p>Register</p>
                </li>
              </ul>
            <div id="login" class="modal-tab-content current">
              <form action="">
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" class="form-control" required="">
                    </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group position-relative">
                        <label for="password">Password</label>
                        <input id="password-field" type="password" class="form-control" name="password" value="">
                        <span toggle="#password-field" class="fa-regular fa-eye toggle-password"></span>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                          <label class="form-check-label" for="flexCheckChecked">
                            Remember Me
                          </label>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="forget-btn" style="text-align: right;">
                        <a class="login-tab-trigger" data-id="lr-forget" href="javascript:void(0);" data-tab-content="forget" rel="nofollow">Forgot Password</a>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group text-center">
                        <button class="common-btn" type="submit">Login</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div id="register" class="modal-tab-content">
              <form action="">
                <div class="container">
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" class="form-control" required="">
                    </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label for="gender">Gender</label>
                        <select name="gender" id="gender" class="form-control">
                          <option value="man">Man</option>
                          <option value="women">women</option>
                          <option value="couple">Couple</option>
                        </select>
                    </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" class="form-control" required="">
                    </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group position-relative">
                        <label for="password">Password</label>
                        <input id="password-field1" type="password" class="form-control" name="password" value="secret">
                        <span toggle="#password-field1" class="fa-regular fa-eye toggle-password"></span>
                    </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group text-center">
                        <button class="common-btn" type="submit">Register</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->


    <!--Jquery JS-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!--Jquery JS-->
    <!--Bootstrap JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <!--Bootstrap JS-->
    <!--Slick JS-->
    <script src="<?php bloginfo('template_directory'); ?>/js/slick.min.js"></script>
    <!--Slick JS-->

    <!--custom JS-->
    <script src="<?php bloginfo('template_directory'); ?>/js/custom.js"></script>
    <!--custom JS-->
    
    <script>
      $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
          $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
          $('.scrolltop').stop(true, true).fadeOut();
        }
      });
    </script>

<?php wp_footer(); ?>
</body>
</html>