var db;

angular.module('starter.controllers', [/*'ionic','ngCordova'*/])

.controller('DashCtrl', function($scope,$ionicPopup,$cordovaSQLite) {
    
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Agenda',
       template: 'Datos almacenados'
     });
   }
   
   
   $scope.guardar = function(pelicula) {


  
        $cordovaSQLite.execute(db, 'INSERT INTO peliculas (nombre,ano,genero,sinopsis,actores) VALUES (?,?,?,?,?)', [pelicula.nombre,pelicula.ano,pelicula.genero,pelicula.sinopsis,pelicula.actores])
        .then(function(result) {
            $scope.statusMessage = "Registro guardado";
        }, function(error) {
            $scope.statusMessage = "Error: " + error.message;
        })
  

     
   }
   
   
   
   
})

.controller('ChatsCtrl', function($scope, Chats,$ionicPopup,$cordovaSQLite) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:

    
    
    
    
    
    
      $scope.chats = Chats.all();
    
    
    $scope.getAll = function()
  {
      $scope.chats = Chats.all();
  };
  
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
    
    
    
    
    
    
    
    
    
    

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $cordovaSQLite) {
 // $scope.chat = Chats.get($stateParams.chatId);
  //$scope.persona={nombre:"hola"};
  $scope.pelicula = Chats.get($stateParams.chatId);
  
  $scope.guardar=function(pelicula){
       $cordovaSQLite.execute(db, 'UPDATE peliculas SET nombre=?, ano=?,genero=?,sinopsis=?,actores=? WHERE id=?', [pelicula.nombre,pelicula.ano,pelicula.genero,pelicula.sinopsis,pelicula.actores,pelicula.id])
        .then(function(result) {
            $scope.statusMessage = "Registro guardado";
        }, function(error) {
            $scope.statusMessage = "Error: " + error.message;
        })
  }
  
  
  
  
  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


