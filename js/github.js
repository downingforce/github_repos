var apiKey = require('./../.env').apiKey;

function Repo () {

}

Repo.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/' + user + '?access_token' + apiKey).then(function(response) {
    // displayFunction(city, response.main.humidity);
    console.log(response);
  }).fail(function(error) {
    $('.showRepos').text(error.responseJSON.message);
  });
};

exports.repoModule = Repo;
