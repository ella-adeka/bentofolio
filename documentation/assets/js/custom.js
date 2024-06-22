$(document).ready(function () {
  // Smooth scroll on menu item click
  $("#menu a").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    var offset = 50; // Adjust the offset as desired
    $("html, body").animate({
        scrollTop: $(target).offset().top - offset,
      },
      0
    ); // Adjust the animation speed as desired

    // Store the active menu item in local storage
    localStorage.setItem('activeMenuItem', target);
  });

  // Change active class based on scroll
  $(window).on("scroll", function () {
    var scrollPos = $(document).scrollTop();
    var offset = 50; // Adjust the offset as desired

    $("#menu a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));

      if (
        refElement.position().top - offset <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $("#menu li").removeClass("active");
        currLink.parent("li").addClass("active");

        // Store the active menu item in local storage
        localStorage.setItem('activeMenuItem', currLink.attr("href"));
      } else {
        currLink.parent("li").removeClass("active");
      }
    });
  });

  // Set the active menu item on page load
  var activeMenuItem = localStorage.getItem('activeMenuItem');
  if (activeMenuItem) {
    $("#menu li").removeClass("active");
    $('a[href="' + activeMenuItem + '"]').parent("li").addClass("active");
  }

  // Scroll to top js start
  var btn = $(".scroll-to-top");

  $(window).on("scroll", function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.on("click", function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        800
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });
});