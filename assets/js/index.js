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

  // text writter
  $("#type_writter").typewriter({
    prefix: "",
    text: ["Fashion", "Furniture", "Electronics", "Sports", "Plant"],
    typeDelay: 100,
    waitingTime: 1500,
    blinkSpeed: 800,
  });

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

  // change is-checked class on buttons isotope
  $(".btn-filters-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "a", function () {
      event.preventDefault();
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
  $(".install-ec").click(function (e) {
    e.preventDefault();
    window.open(
      `https://ecomposer.app/install?shop=${$("#input_install").val()}`,
      "_blank"
    );
  });

  // change is-checked class on buttons tabs
  $(".tabs-group").each(function (i, buttonGroup) {
    let $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", ".tabs-item", function () {
      event.preventDefault();
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");

      // active content
      $(".tabs-content.active").removeClass("active");
      $(`.tabs-content.${$(this).data("tabs")}`).addClass("active");
    });
  });
  // masonry layoutmode

  $(".masonry-row").isotope({
    itemSelector: ".masonry-item",
    masonry: {
      columnWidth: 1,
    },
  });

  // slide marquee
  $(".slider")?.map((slide) => {
    slide.slider = new Swiper(".slider", {
      loop: true,
      speed: 15000,
      slidesPerView: "auto",
      autoplay: {
        delay: 0,
      },
    });
  });
  // video popup
  $(".play-btn-popup").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  // accordion
  $(document).on("click", ".faq-button", function () {
    $(".faq-item.active").removeClass("active");
    $(".faq-button.active").removeClass("active");
    $(".faq-content").hide();
    $(this).toggleClass("active");
    $(this).parent(".faq-item").toggleClass("active");
    $(this).next(".faq-content").slideToggle();
  });
  // back to top
  let body_height = $(document).height();

  $(window).on("scroll", function () {
    let current_pos = $(this).scrollTop();
    let deg = (current_pos / body_height) * 100;

    $(".btt-progress").css(
      "background",
      `conic-gradient(rgba(0, 0, 0,0.25) ${
        deg * 3.6
      }deg , rgb(255, 255, 255) 0deg)`
    );

    current_pos > 100
      ? $(".back-to-top").addClass("active")
      : $(".back-to-top").removeClass("active");
    console.log(current_pos, $(document).height());
  });
  $(document).on("click", ".back-to-top", function () {
    $(window).scrollTop(0);
  });
});
