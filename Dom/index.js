const $=require("jquery");
var Dell = (function () {
  function save($) {
    if (!$('#panic-button').hasClass('expanded')) {
      $('#panic-button').addClass('expanded');
    } else {
      $('#panic-button').removeClass('expanded');

    }
  }


  $(document).ready(function ($) {
    $('#panic-button').on('click', function (e) {
      e.preventDefault();
      save($);
    });
  });

  const exports = {
    save
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exports;
  }
})();