var projectData = [
  {
    title: 'About Me',
    preview: 'https://placekitten.com/300/300',
    previewUrl: 'https://github.com/aer03280/about_me',
    dateCreated: '2016-10-18',
    description: '<p>This is a site I built with a get-to-know Ashley game.</p>',
  },
  {
    title: 'Trip Planner',
    preview: 'https://placekitten.com/300/300',
    previewUrl: 'https://github.com/shortaj/Group_Project-Trip-Planner',
    dateCreated: '2016-11-09',
    description: '<p>This application was created as a group assignment. It helps you select a destination for your next vacation.</p>',

  },
  {
    title: 'The Cookie Stand',
    preview: 'https://placekitten.com/300/300',
    previewUrl: 'https://github.com/aer03280/cookie-stand',
    dateCreated: '2016-10-24',
    description: '<p>I created this site as a class assignment for a fictitious cookie shop.</p>',
  },

];

var arts = [];

function Articles (projects) {
  this.title = projects.title;
  this.preview = projects.preview;
  this.previewUrl = projects.previewUrl;
  this.dateCreated = projects.dateCreated;
  this.description = projects.description;
}


Articles.prototype.toHtml = function() {
  var $source = $('#project-template').html();
  var templateRender = Handlebars.compile($source);
  return templateRender(this);
  $newArticle.find('time').text('created ' + parseInt((new Date() - new Date(this.dateCreated))/60/60/24/1000) + ' days ago.');
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


projectData.handleNav = function () {
  $('.navMain').on('click' , '.nav' , function() {
    $('.navContent').hide();
    $('#' + $(this).attr('data-content')).fadeIn(700);
  });
  $('.navMain .nav:first').click();
};

projectData.handleNav();
