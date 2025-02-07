$(document).ready(function () {
  $(".parent").click(function () {
    $(this).toggleClass("expanded");
    $(this).children("ul").slideToggle(300);
  });
  let defaultSelection = $(".selected").first();
  defaultSelection
    .closest(".parent")
    .addClass("expanded")
    .children("ul")
    .show();
});
