$("#carouselButton").click(function () {
  if ($("#carouselButton").children("span").hasClass("fa-pause")) {
    $("#mycarousel").carousel("pause");
    $("#carouselButton").children("span").removeClass("fa-pause");
    $("#carouselButton").children("span").addClass("fa-play");
  } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
    $("#mycarousel").carousel("cycle");
    $("#carouselButton").children("span").removeClass("fa-play");
    $("#carouselButton").children("span").addClass("fa-pause");
  }
});

$("#reserveTable").click("show.bs.modal", function (e) {
  $("#reservationModal").modal("show");
});

$("#loginButton").click("show.bs.modal", function (e) {
  $("#loginModal").modal("show");
});
