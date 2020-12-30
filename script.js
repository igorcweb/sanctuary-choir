
$("a.mary").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#mary").removeClass("d-none");
});

$("a.epiphany").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#epiphany").removeClass("d-none");
});
$("a.ot2").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#ot2").removeClass("d-none");
});

