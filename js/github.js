var apiKey = require('./../.env').apiKey;

function Repo () {

}

Repo.prototype.getUserInfo = function(user) {
  $.get('https://api.github.com/users/' + user + '?access_token' + apiKey).then(function(response) {
  }).fail(function(error) {
    $('.showUser').text("There is no user matching that name");
  });
};

Repo.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos?per_page=100' + '&access_token=' + apiKey).then(function(response) {
    console.log(response);
    var userRepos = response;
    for (i = 0; i < userRepos.length; i++) {
      $('.showRepos').append('<li>' + userRepos[i].name + '</li>')
    }
  }).fail(function(error) {
    $('.showRepos').text(error.responseJSON.message);
  });
};

exports.repoModule = Repo;
