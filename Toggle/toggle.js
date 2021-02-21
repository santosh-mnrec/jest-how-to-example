const $ = require("jquery");
const Toggle = (function (toggle, $) {
  toggle.clickHandler = () => {
    $(".active").not(this).removeClass("active").next().hide(300);

    $(this).toggleClass("active");

    if (false == $(this).next().is(":visible")) {
      $("#accordion > ul").slideUp(300);
    }
    $(this).next().slideToggle(300);
    console.log("clicked!");
  };

  toggle.attach = () => { // exposing method to attach handlers
    $("#accordion > li > div").on("click", toggle.clickHandler);
  };

  return {
    toggle
  };
})({}, $);

module.exports = Toggle.toggle;