$(document).ready(function () {
  // count down top bar
  $("#countdown").countdown("2024/10/10", function (event) {
    $(this).html(
      event.strftime(
        "<div><span>%D</span> <span>Days</span></div> <div><span>%H</span> <span>Hours</span></div> <div><span>%M</span> <span>Mins</span></div> <div><span>%S</span> <span>Secs</span></div>"
      )
    );
  });
  $(document).on("click", "#topbar_close", function () {
    $(".t4s-topbar ").slideToggle();
  });

  // menu bar
  $(document).on("click", ".menubar_btn", function () {
    $(".overlay").toggleClass("active");
    $(".nav-list").toggleClass("active");
  });
  $(document).on("click", ".overlay", function () {
    $(".overlay").toggleClass("active");
    $(".nav-list").toggleClass("active");
  });
  $(window).on("resize", function () {
    if ($(window).width() >= 992) {
      $(".overlay").removeClass("active");
      $(".nav-list").removeClass("active");
    }
  });
  $(".slide-item .marquee-content").clone().appendTo(".marquee");
});
