$(document).ready(function () {
  $(".owl-carousel-pp1").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 0,
    smartSpeed: 1000,
    mouseDrag: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      768: {
        items: 2,
        dots: true,
      },
      992: {
        items: 3,
        mouseDrag: false,
        dots: false,
      },
    },
  });

  $(".owl-carousel-rp").owlCarousel({
    center: false,
    items: 4,
    loop: false,
    margin: 0,
    smartSpeed: 1000,
    dots: true,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  $(".owl-carousel-slide").owlCarousel({
    center: false,
    items: 1,
    loop: true,
    margin: 0,
    smartSpeed: 1000,
    dots: true,
    nav: false,
    autoplay: true,
  });

  $(".product-carousel").owlCarousel({
    margin: 35,
    loop: false,
    autoWidth: true,
    dots: false,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
  });
});

function scrollWaypointInit(items, trigger) {
  items.each(function () {
    var element = $(this),
      osAnimationClass = element.data("animation"),
      osAnimationDelay = element.attr("data-animation-delay");

    element.css({
      "-webkit-animation-delay": osAnimationDelay,
      "-moz-animation-delay": osAnimationDelay,
      "animation-delay": osAnimationDelay,
    });

    var trigger = trigger ? trigger : element;

    trigger.waypoint(
      function () {
        element.addClass("animated").addClass(osAnimationClass);
      },
      {
        // triggerOnce: true,
        offset: "100%",
      }
    );
  });
}

$(document).ready(function () {
  scrollWaypointInit($(".animateMe"));
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("Header").style.padding = "5px 0";
    document.getElementById("Header").style.backgroundColor = "#F67509";
    document.getElementById("Header").style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.06)";
  } else {
    document.getElementById("Header").style.padding = "15px 0";
    document.getElementById("Header").style.backgroundColor = "transparent";
    document.getElementById("Header").style.boxShadow = "none";
  }
}

$(function () {
  $("#btnMenu").click(function () {
    $(".overlay").addClass("show");
    $(".menu-m-list").addClass("show");
  });

  $("#btnClose").click(function () {
    $(".overlay").removeClass("show");
    $(".menu-m-list").removeClass("show");
  });

  $(".overlay").click(function () {
    $(".overlay").removeClass("show");
    $(".menu-m-list").removeClass("show");
  });
});
