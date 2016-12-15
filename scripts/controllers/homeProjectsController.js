(function(module) {
   var homeProjectsController = {};

homeProjectsController.reveal = function() {
  $('#aboutMe').hide();
  $('#projects').show();
};
module.homeProjectsController = homeProjectsController;
  })(window);
