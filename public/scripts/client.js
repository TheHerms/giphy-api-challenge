var app = angular.module('GiphyApp', []);

app.controller('GiphyController', function(giphyService){
  console.log('GiphyController Loaded');

  var ctrl = this;

  ctrl.giphyList = [];

  // ctrl.currentGif = {};
ctrl.random = function(){
  giphyService.getGiphy().then(function(response){
    ctrl.giphyList.push(response)
  });
};





  // ctrl.giphySearch = function(gifName) {
  //   var searchGif = ('http://api.giphy.com/v1/gifs/search?q=' + gifName + '&api_key=dc6zaTOxFJmzC');
  //   $http.get(searchGif).then(function(response){
  //     ctrl.giphyList.push(response.data.data[0].images.original.url);
  //     console.log(ctrl.giphyList);
  //   }).catch(function(err){
  //     console.log('Error', err);
  //   })
  // }; // end ctrl.giphySearch
});
