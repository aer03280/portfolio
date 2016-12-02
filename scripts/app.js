var projectData = [
  {
    title: 'About Me',
    preview: 'https://placekitten.com/300/300',
    previewUrl: 'https://github.com/aer03280/about_me',
    dateCreated: '2016-10-18',
    description: '<p>This is a site I built with a get-to-know Ashley game. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
  },
  {
    title: 'Trip Planner',
    preview: 'https://placekitten.com/300/300',
    previewUrl: 'https://github.com/shortaj/Group_Project-Trip-Planner',
    dateCreated: '2016-11-09',
    description: '<p>This application was created as a group assignment. It helps you select a destination for your next vacation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',

  },
  {
    title: 'The Cookie Stand',
    preview: 'https://placekitten.com/300/300',
    previewUrl: 'https://github.com/aer03280/cookie-stand',
    dateCreated: '2016-10-24',
    description: '<p>I created this site as a class assignment for a fictitious cookie shop. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
  },

];

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

projectData.handleNav = function () {
  $('.navMain').on('click' , '.nav' , function() {
    $('.navContent').hide();
    $('#' + $(this).attr('data-content')).fadeIn(700);
  });
  $('.navMain .nav:first').click();
};

projectData.handleNav();
