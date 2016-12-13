(function(module) {
   var aboutController = {};

aboutController.reveal = function() {
  $('#projects').hide();
  $('#aboutMe').show();
};
module.aboutController = aboutController;
  })(window);
