$(document).ready(function () {
  var lastScrollTop = 0;
  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    var windowWidth = $(window).width(); 

    // Only for desktop and above breakpoints
    if (windowWidth > 1024) {
      if (scrollTop > lastScrollTop) {
        $(".desktop-navigation").slideUp("fast");
      } else {
        $(".desktop-navigation").slideDown("fast");
      }
    }

    if (scrollTop > 100) {
      $(".header-wrapper").addClass("white-background");
      $(".hamburger i").removeClass("color-white").addClass("color-primary");
      $(".header-search i")
        .removeClass("color-white")
        .addClass("color-primary");
      $(".logo img").removeClass("white-mobile-logo");
      $(".desktop-header .left-logo.two").removeClass("hide")
      $(".desktop-header .left-logo.one").addClass("hide")
    } else {
      $(".header-wrapper").removeClass("white-background");
      $(".hamburger i").removeClass("color-primary").addClass("color-white");
      $(".header-search i")
        .removeClass("color-primary")
        .addClass("color-white");
      $(".logo img").addClass("white-mobile-logo");
      $(".desktop-header .left-logo.two").addClass("hide")
      $(".desktop-header .left-logo.one").removeClass("hide")
    }
  });

  // side navigtion
  $("#hamburger-btn").on("click", function () {
    $("#sidenav").addClass("full-width");
  });
  $(".closebtn").on("click", function () {
    $("#sidenav").removeClass("full-width");
  });

  // desktop navigation hover
  $(".desktop-navigation li a").hover(
    function () {
      $(this).parent("li").addClass("underline");
    },
    function () {
      $(this).parent("li").removeClass("underline");
    }
  );

  // tab controls
  $("#payments").show();
  $(".tab-btn[data-tab='payments']").addClass("active");
  $(".tab-btn").click(function () {
    const tabID = $(this).data("tab");
    $(".tab-btn").removeClass("active");
    $(".tab-content").hide();
    $("#" + tabID).show();
    $(this).addClass("active");
  });
});
