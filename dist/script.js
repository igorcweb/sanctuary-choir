// $("#palmSunday").collapse("show");

$("a.palm-sunday").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#holyThursday").addClass("d-none");
  $("#goodFriday").addClass("d-none");
  $("#easterVigil").addClass("d-none");
  $("#easterSunday").addClass("d-none");
  $("#easter-2").addClass("d-none");
  $("#easter-3").addClass("d-none");
  $("#easter-4").addClass("d-none");
  $("#palmSunday").removeClass("d-none");
});

$("a.holy-thursday").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#palmSunday").addClass("d-none");
  $("#goodFriday").addClass("d-none");
  $("#easterVigil").addClass("d-none");
  $("#easterSunday").addClass("d-none");
  $("#easter-2").addClass("d-none");
  $("#easter-3").addClass("d-none");
  $("#easter-4").addClass("d-none");
  $("#holyThursday").removeClass("d-none");
});

$("a.good-friday").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#palmSunday").addClass("d-none");
  $("#holyThursday").addClass("d-none");
  $("#easterVigil").addClass("d-none");
  $("#easterSunday").addClass("d-none");
  $("#easter-2").addClass("d-none");
  $("#easter-3").addClass("d-none");
  $("#easter-4").addClass("d-none");
  $("#goodFriday").removeClass("d-none");
});

$("a.easter-vigil").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#palmSunday").addClass("d-none");
  $("#holyThursday").addClass("d-none");
  $("#goodFriday").addClass("d-none");
  $("#easterSunday").addClass("d-none");
  $("#easter-2").addClass("d-none");
  $("#easter-3").addClass("d-none");
  $("#easter-4").addClass("d-none");
  $("#easterVigil").removeClass("d-none");
});

$("a.easter-sunday").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#palmSunday").addClass("d-none");
  $("#holyThursday").addClass("d-none");
  $("#easterVigil").addClass("d-none");
  $("#goodFriday").addClass("d-none");
  $("#easter-2").addClass("d-none");
  $("#easter-3").addClass("d-none");
  $("#easter-4").addClass("d-none");
  $("#easterSunday").removeClass("d-none");
});

$("a.easter-2").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#palmSunday").addClass("d-none");
  $("#holyThursday").addClass("d-none");
  $("#easterVigil").addClass("d-none");
  $("#goodFriday").addClass("d-none");
  $("#easter-3").addClass("d-none");
  $("#easterSunday").addClass("d-none");
  $("#easter-4").addClass("d-none");
  $("#easter-2").removeClass("d-none");
});

$("a.easter-3").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#palmSunday").addClass("d-none");
  $("#holyThursday").addClass("d-none");
  $("#easterVigil").addClass("d-none");
  $("#goodFriday").addClass("d-none");
  $("#easter-2").addClass("d-none");
  $("#easterSunday").addClass("d-none");
  $("#easter-4").addClass("d-none");
  $("#easter-3").removeClass("d-none");
});

$("a.easter-4").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#palmSunday").addClass("d-none");
  $("#holyThursday").addClass("d-none");
  $("#easterVigil").addClass("d-none");
  $("#goodFriday").addClass("d-none");
  $("#easter-2").addClass("d-none");
  $("#easterSunday").addClass("d-none");
  $("#easter-3").addClass("d-none");
  $("#easter-4").removeClass("d-none");
});
