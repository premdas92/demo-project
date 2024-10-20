$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".header-wrapper").addClass("white-background");
      $(".hamburger i").removeClass("color-white").addClass("color-primary");
      $(".header-search i")
        .removeClass("color-white")
        .addClass("color-primary");
      $(".logo img").removeClass("white-logo");
    } else {
      $(".header-wrapper").removeClass("white-background");
      $(".hamburger i").removeClass("color-primary").addClass("color-white");
      $(".header-search i")
        .removeClass("color-primary")
        .addClass("color-white");
      $(".logo img").addClass("white-logo");
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
