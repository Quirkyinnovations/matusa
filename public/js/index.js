$(document).ready(function() {
  // include differents pages
  // $('#footer').load("pages/includes/footer.html");

  $("#home").on("click", function() {
    $("#content").load("pages/home.html");
  });

  //select all the links
  var links = $("a");

  $(links).each(function(index, item) {
    if ($(item).attr("id") == "principles") {
      $("#content").load("pages/principles.html");
    }
    $(item).on("click", function(e) {
      e.preventDefault();
      var content = e.target.dataset.content;
      var id = e.target.id;
      switch (id) {
        case "principles":
          $("#content").load(content);
          break;
        case "home":
          $("#content").load(content);
          break;

        case "about":
          $("#content").load(content);
          break;

        case "gallery":
          $("#content").load(content);
          break;

        case "contact":
          $("#content").load(content);
          break;

        case "joinus":
          $("#content").load(content);
          break;

        default:
          $("#content").load(content);
          break;
      }
    });
  });

  // on scroll nav bar navigation
  $(window).on("scroll", function() {
    if ($(this).scrollTop() >= 75) {
      $(".header").css({
        background: "rgb(180,177,144)"
      });
    } else {
      $(".header").css({
        background: "unset"
      });
    }
  });

  // get current year
  function getCurrentYear() {
    var currentYear = new Date().getFullYear();
    $(".currentY").html(currentYear);
  }
  getCurrentYear();

  // open menu toggle

  $(".open-toggle").on("click", function() {
    $(".nav-list-mobile").addClass("active-list");
  });
  $(".nav-list-mobile__item").click(function() {
    $(".nav-list-mobile").removeClass("active-list");
  });

  $(".close-toggle").click(function() {
    $(".nav-list-mobile").removeClass("active-list");
  });
});
