var app = angular.module('GiphyApp', []);

app.controller('GiphyController', function($http){
  console.log('GiphyController Loaded');

  var RANDOMAPI = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'
  // dc6zaTOxFJmzC
  var ctrl = this;

  ctrl.giphyList = [];

  ctrl.random = function() {
    $http.get(RANDOMAPI).then(function(response){
      console.log('Gif ', response);
      ctrl.giphyList.push(response.data.data.image_original_url);
      console.log(ctrl.giphyList);
    }).catch(function(err){
      console.log('Error', err);
    });
  }; // end ctrl.random

  ctrl.giphySearch = function(gifName) {
    var searchGif = ('http://api.giphy.com/v1/gifs/search?q=' + gifName + '&api_key=dc6zaTOxFJmzC');
    $http.get(searchGif).then(function(response){
      ctrl.giphyList.push(response.data.data[0].images.original.url);
      console.log(ctrl.giphyList);
    }).catch(function(err){
      console.log('Error', err);
    })
  }; // end ctrl.giphySearch

});
