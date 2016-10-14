var Repo = require('./../js/github.js').repoModule;

$(document).ready(function() {

  $('#userRepos').click(function() {
    var GitHubUser = $('#repos').val();
    var newRepo = new Repo ();
    newRepo.getUserInfo(GitHubUser);
    newRepo.getRepos(GitHubUser);
    $('#repos').val("");
    $('.showUser').text("Repositories for " + GitHubUser + ":");
  });

});
