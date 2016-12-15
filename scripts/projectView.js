(function(module) {
var articleView = {};

articleView.aboutHide = function () {
  $('#aboutMe').hide();
};

articleView.handleAssignedFilter = function() {
  $('#assigned-filter').on('change', function() {
    if ($(this).val()) {
      $('project').hide();
      $('project[data-assigned="' + $(this).val() + '"]').fadeIn();
    } else {
      $('project').fadeIn();
      $('project.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('project').hide();
      $('project[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('project').fadeIn();
      $('project.template').hide();
    }
    $('#assigned-filter').val('');
  });
};

articleView.renderPage = function() {
  Article.allArticles.forEach(function(a){
    $('#projects').append(a.toHtml('#project-template'));
    if($('#category-filter option:contains("'+ a.category + '")').length === 0) {
      $('#category-filter').append(a.toHtml('#category-filter-template'));
    };
    if($('#assigned-filter option:contains("'+ a.assigned + '")').length === 0) {
      $('#assigned-filter').append(a.toHtml('#assigned-filter-template'));
    };
  });
  articleView.handleCategoryFilter();
  articleView.handleAssignedFilter();
};
module.articleView = articleView;
})(window);
