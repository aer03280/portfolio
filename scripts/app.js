var proj = [];
function Projects (opts) {
  for (key in opts) {
    this[key] = opts[key];
  }
};

Projects.prototype.toHtml = function() {
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
  proj.push(new Projects(artObj));
});

proj.forEach(function(a) {
  $('#projects').append(a.toHtml());
});


// use JSON to store data in localStorage
Projects.fetchAll = function() {
  if(localStorage.projectData) {
    Projects.loadAll(JSON.parse(localStorage.projectData));
    articleView.renderPage();
  } else {
    $.getJSON('data/projectData.json', function(data) {
      localStorage.projectData = JSON.stringify(data);
      Projects.loadAll(JSON.parse(localStorage.projectData));
      articleView.renderPage();
    });
  }
};

// Hide about and home tabs when the other is clicked // currently hidden bc routes.js
// projectData.handleNav = function () {
//   $('.navMain').on('click' , '.nav' , function() {
//     $('.navContent').hide();
//     $('#' + $(this).attr('data-content')).fadeIn(700);
//   });
//   $('.navMain .nav:first').click();
// };
//
// projectData.handleNav();
Projects.fetchAll();
