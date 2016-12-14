(function(module) {
  var repos = {};

  repos.allRepos = [];
  repos.requestRepos = function(callback) {
// TODONE: create a githubToken.js file that we can use to generate our headers
         // properly.
    $.ajax({
      url: 'https://api.github.com/users/codefellows/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + '33715a2863e525c88f1fd0b99872a8ece8a8c1a4'},
      success:
      function(data) {
        repos.allRepos = data;
        console.log(data);
        callback();
      }
    });
  };

  repos.withTheAttribute = function(myAttr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.repos = repos;
})(window);
