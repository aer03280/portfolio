(function(module) {
  var repos = {};

  repos.allRepos = [];
  repos.requestRepos = function(callback) {
// TODONE: create a githubToken.js file that we can use to generate our headers
         // properly.
    $.ajax({
      url: 'https://api.github.com/users/codefellows/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + '6d0895931736a92cfbc299e55a1d180371077714'},
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
