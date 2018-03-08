'use strict';
var app = app || {};

// TODO: Wrap the contents of this file, except for the preceding 'use strict' and 'var app...' declararions, in an IIFE.
// Give the IIFE a parameter called 'module'.
// At the very end of the code, but still inside the IIFE, attach the 'articleView' object to 'module'.
// Where the IIFE is invoked, pass in the global 'app' object that is defined above.
// Keep in mind that all references to 'Article' in this file now need to be renamed to 'app.Article'. There are not separate instructions for those; you'll need to debug and find them on your own.
(function(module) {
  var articleView = {};

  articleView.populateFilters = () => {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        var val = $(this).find('address a').text();
        var optionTag = `<option value="${val}">${val}</option>`;
        if ($(`#author-filter option[value="${val}"]`).length === 0) {
          $('#author-filter').append(optionTag);
        }

        val = $(this).attr('data-category');
        optionTag = `<option value="${val}">${val}</option>`;
        if ($(`#category-filter option[value="${val}"]`).length === 0) {
          $('#category-filter').append(optionTag);
        }
      }
    });
  };

  articleView.handleAuthorFilter = () => {
    $('#author-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $(`article[data-author="${$(this).val()}"]`).fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#category-filter').val('');
    });
  };

  articleView.handleCategoryFilter = () => {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $(`article[data-category="${$(this).val()}"]`).fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#author-filter').val('');
    });
  };

  articleView.handleMainNav = () => {
    $('.main-nav').on('click', '.tab', function() {
      $('.tab-content').hide();
      $(`#${$(this).data('content')}`).fadeIn();
    });

    $('.main-nav .tab:first').click();
  };

  articleView.setTeasers = () => {
    $('.article-body *:nth-of-type(n+2)').hide();
    $('article').on('click', 'a.read-on', function(e) {
      e.preventDefault();
      if ($(this).text() === 'Read on →') {
        $(this).parent().find('*').fadeIn();
        $(this).html('Show Less &larr;');
      } else {
        $('body').animate({
          scrollTop: ($(this).parent().offset().top)
        },200);
        $(this).html('Read on &rarr;');
        $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
      }
    });
  };

  articleView.initNewArticlePage = () => {
    $('.tab-content').show();
    $('#export-field').hide();
    $('#article-json').on('focus', function(){
      this.select();
    });

    $('#new-form').on('change', 'input, textarea', articleView.create);
    $('#new-form').on('submit', articleView.submit);
  };

  articleView.create = () => {
    var article;
    $('#articles').empty();

    article = new app.Article({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      authorUrl: $('#article-author-url').val(),
      category: $('#article-category').val(),
      body: $('#article-body').val(),
      publishedOn: new Date().toISOString()
    });

    $('#articles').append(article.toHtml());
    $('pre code').each((i, block) => hljs.highlightBlock(block));
  };

  articleView.submit = event => {
    event.preventDefault();
    let article = new app.Article({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      authorUrl: $('#article-author-url').val(),
      category: $('#article-category').val(),
      body: $('#article-body').val(),
      publishedOn: new Date().toISOString()
    });

    article.insertRecord();

    // REVIEW: The following line of code redirects the user back to the home page after submitting the form.
    window.location = '../';
  }

  articleView.initIndexPage = () => {
    app.Article.all.forEach(a => $('#articles').append(a.toHtml()));

    articleView.populateFilters();
    articleView.handleCategoryFilter();
    articleView.handleAuthorFilter();
    articleView.handleMainNav();
    articleView.setTeasers();
    $('pre code').each((i, block) => hljs.highlightBlock(block));
  };

  articleView.initAdminPage = () => {
    // TODO: Call the Handlebars .compile() method, which will return a function for you to use where needed.
    // Make sure you assign the result of your Handlebars.compile call to a variable called "template", since we are then calling "template" below.

    var template = Handlebars.compile($('#author-template').text());

    // REVIEW: We use .forEach() here because we are relying on the side-effects of the callback function: appending to the DOM.
    // The callback is not required to return anything.
    app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));

    // REVIEW: Simply write the correct values to the page:
    $('#blog-stats .articles').text(app.Article.all.length);
    $('#blog-stats .words').text(app.Article.numWordsAll());
  };

  module.articleView = articleView;
})(app);
