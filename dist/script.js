
$("a.advent-4").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#advent-4").removeClass("d-none");
});
$("a.hf").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#hf").removeClass("d-none");
});