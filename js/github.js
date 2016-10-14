var apiKey = require('./../.env').apiKey;

function Repo () {

}

Repo.prototype.getUserInfo = function(user) {
  $.get('https://api.github.com/users/' + user + '?access_token' + apiKey).then(function(response) {
    console.log(response);
  }).fail(function(error) {
    $('.showUser').text(error.responseJSON.message);
  });
};

Repo.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/' + user + '/repos' + '?access_token' + apiKey).then(function(response) {
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
