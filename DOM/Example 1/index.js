const $ = require("jquery");
var Dell = (() => {
  const save = ($) => {
    if (!$('#panic-button').hasClass('expanded')) {
      $('#panic-button').addClass('expanded');
    } else {
      $('#panic-button').removeClass('expanded');

    }
  }
  const parsePostResponse = (posts, $, Handlebars, noPostsFoundMessage = 'No Posts Found') => {
    if (!posts.length) {
      $("#posts").html(noPostsFoundMessage);
    } else {
      //parse with handlebars
      const template = $("#posts-templ").html();
      const compiledTemplate = Handlebars.compile(template);
      $("#posts").html(compiledTemplate(posts));
    }
  };

  const parseErrorResponse = (response, $) => {
    $('#posts').html(response.message);
  };

  const alwaysHandler = ($) => {
    $('#posts').addClass('posts-loaded');
  };

  $(document).ready(($) => {
    $('#panic-button').on('click', (e) => {
      e.preventDefault();
      save($);
    });
  });

  const exports = {
    save,
    parsePostResponse
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exports;
  }
})();