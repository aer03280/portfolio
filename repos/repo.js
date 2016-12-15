(function(module) {
  var repos = {};

  repos.allRepos = [];
  repos.requestRepos = function(callback) {
// TODONE: create a githubToken.js file that we can use to generate our headers
         // properly.
    $.ajax({
      url: 'https://api.github.com/users/aer03280/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + process.env.GITHUB_TOKEN},
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
