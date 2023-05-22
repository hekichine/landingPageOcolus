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
    $(".nav-list").slideToggle();
  });
  // $(".slide-item .marquee-content").clone().appendTo(".marquee");

  // isotope
  // init Isotope
  var $grid = $(".isotope-grid").isotope({
    itemSelector: ".isotope-item",
    layoutMode: "fitRows",
  });
  // bind filter button click
  $("#filters-group").on("click", ".btn-filter", function () {
    var filterValue = $(this).attr("data-filter");
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $(".btn-filters-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "a", function () {
      event.preventDefault();
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
});
