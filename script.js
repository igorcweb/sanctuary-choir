$("#palmSunday").collapse("show");

$("a.palm-sunday").on("click", function() {
  const pannelsToCollapse = $(".collapse");
  $("#holyThursday").collapse("hide");
  $("#goodFriday").collapse("hide");
  $("#easterVigil").collapse("hide");
  $("#easterSunday").collapse("hide");
  $("#palmSunday").collapse("show");
});

$("a.holy-thursday").on("click", function() {
  $("#palmSunday").collapse("hide");
  $("#goodFriday").collapse("hide");
  $("#easterVigil").collapse("hide");
  $("#easterSunday").collapse("hide");
  $("#holyThursday").collapse("show");
});

$("a.good-friday").on("click", function() {
  $("#palmSunday").collapse("hide");
  $("#holyThursday").collapse("hide");
  $("#easterVigil").collapse("hide");
  $("#easterSunday").collapse("hide");
  $("#goodFriday").collapse("show");
});

$("a.easter-vigil").on("click", function() {
  $("#palmSunday").collapse("hide");
  $("#holyThursday").collapse("hide");
  $("#goodFriday").collapse("hide");
  $("#easterSunday").collapse("hide");
  $("#easterVigil").collapse("show");
});

$("a.easter-sunday").on("click", function() {
  $("#palmSunday").collapse("hide");
  $("#holyThursday").collapse("hide");
  $("#easterVigil").collapse("hide");
  $("#goodFriday").collapse("hide");
  $("#easterSunday").collapse("show");
});
