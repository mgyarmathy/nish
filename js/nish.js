var request = require('browser-request');
var _ = require('underscore');

module.exports = function() {
    request({method:'GET', url:'./nish.json', json:true}, function (er, response, body) {
        document.getElementById('rhyme').innerHTML = "\'"+_.sample(body.rhymesWith)+"\'";
        setInterval(function() {
            document.getElementById('rhyme').innerHTML = "\'"+_.sample(body.rhymesWith)+"\'";
        },5000);
    });
};