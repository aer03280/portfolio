var arts = [];
function Articles (opts) {
  for (key in opts) {
    this[key] = opts[key];
  }
};

Articles.prototype.toHtml = function() {
  this.daysAgo = parseInt((new Date() - new Date(this.dateCreated))/60/60/24/1000) + ' days ago.';
  this.publishStatus = this.dateCreated ? 'created ' + this.daysAgo: '(draft)';
  var $source = $('#project-template').html();
  var templateRender = Handlebars.compile($source);
  return templateRender(this);
}

projectData.sort(function(currentObject, nextObject) {
  return(new Date(nextObject.dateCreated)) - (new Date(currentObject.dateCreated));
});

projectData.forEach(function(artObj){
  arts.push(new Articles(artObj));
});

arts.forEach(function(a) {
  $('#projects').append(a.toHtml());
});


// use JSON to store data in localStorage
Articles.fetchAll = function() {
  if(localStorage.projectData) {
    Articles.loadAll(JSON.parse(localStorage.projectData));
    // articleView.renderIndexPage();
    projectData.handleNav();
  } else {
    $.getJSON('scripts/data.js', function(data) {
      localStorage.projectData = JSON.stringify(data);
      Articles.loadAll(JSON.parse(localStorage.projectData));
      // articleView.renderIndexPage();
      projectData.handleNav();
    });
  }
};

// Hide about and home tabs when the other is clicked
projectData.handleNav = function () {
  $('.navMain').on('click' , '.nav' , function() {
    $('.navContent').hide();
    $('#' + $(this).attr('data-content')).fadeIn(700);
  });
  $('.navMain .nav:first').click();
};

projectData.handleNav();
Articles.fetchAll();
