$("a.lm").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#lm").removeClass("d-none");
});

$("a.ps").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#ps").removeClass("d-none");
});

$("a.mp").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#mp").removeClass("d-none");
});



