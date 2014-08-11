var request = require('browser-request');
var _ = require('underscore');

module.exports = function() {
    request({method:'GET', url:'https://raw.githubusercontent.com/mgyarmathy/nish/gh-pages/nish.json', json:true}, function (er, response, body) {
        document.getElementById('rhyme').innerHTML = "\'"+_.sample(body.rhymesWith)+"\'";
    });
};