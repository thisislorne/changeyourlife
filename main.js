$(document).ready(function() {

  $(".left-blur").hover(function() {
    $(".left-blur").removeClass("red-blur");
  }, function() {
    $(".left-blur").addClass("red-blur");
  });

  $(".right-blur").hover(function() {
    $(".right-blur").removeClass("blue-blur");
  }, function() {
    $(".right-blur").addClass("blue-blur");
  });

  $(".right-blur").click(function() {
    $(".right-blur").removeClass("blue-blur");
    $(".right-blur").find('a[href*="#"]').removeClass("disabled");
    $(".left-blur").addClass("red-blur");
    $(".left-blur").find('a[href*="#"]').addClass("disabled");
  });

  $(".left-blur").click(function() {
    $(".left-blur").removeClass("red-blur");
    $(".left-blur").find('a[href*="#"]').removeClass("disabled");
    $(".right-blur").addClass("blue-blur");
    $(".right-blur").find('a[href*="#"]').addClass("disabled");
  });

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('.disabled')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  });