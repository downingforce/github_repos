var Repo = require('./../js/github.js').repoModule;

$(document).ready(function() {

  $('#userRepos').click(function() {
    var GitHubUser = $('#repos').val();
    var newRepo = new Repo ();
    newRepo.getRepos(GitHubUser);
    $('#repos').val("");
    $('.showRepos').text("Repositories for " + GitHubUser + ":");

  });

});
