app.service('giphyService', function($http){
  var RANDOMAPI = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'

   this.getGiphy = function() {
    return $http.get(RANDOMAPI).then(function(response){
      console.log('Gif ', response);
      return response.data.data.image_original_url;
    }).catch(function(err){
      console.log('Error', err);
    });
  };
})
