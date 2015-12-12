angular.module('starter.services', [])

.factory('Chats', function($cordovaSQLite,$ionicPopup) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
 
 
var chats = [];


return{
    all:function(){
    chats = [];
  $cordovaSQLite.execute(db, 'SELECT * FROM peliculas ORDER BY id DESC')
            .then(
                function(result) {
 
                    if (result.rows.length > 0) {
                for(var i=0;i<result.rows.length;i++)
			{
			
			chats.push({ "id":result.rows.item(i).id, 
			"nombre":result.rows.item(i).nombre,
			"ano":result.rows.item(i).ano,
			"genero":result.rows.item(i).genero,
			"sinopsis":result.rows.item(i).sinopsis,
			"actores":result.rows.item(i).actores
            });
                        }
                    }
                },
                function(error) {
                    statusMessage = "Error on loading: " + error.message;
                }
            );  
    return chats;
    }
    ,
    remove: function(chat){
        $cordovaSQLite.execute(db, "DELETE FROM peliculas WHERE id = ?", [chat.id])
        .then(function(result){
        statusMessage="Borrado";
        },
        function(error){
         statusMessage="Error "+ error.message;  
        });
        chats.splice(chats.indexOf(chat), 1);
    },
    
    get: function(chatId) {
        chats = [];
       $cordovaSQLite.execute(db, "SELECT * FROM peliculas WHERE id = ?", [chatId])
        .then(function(result){
            
            
            if (result.rows.length > 0) {
               
			chats.push({ "id":result.rows.item(0).id, 
			"nombre":result.rows.item(0).nombre,
			"ano":result.rows.item(0).ano,
			"genero":result.rows.item(0).genero,
			"sinopsis":result.rows.item(0).sinopsis,
			"actores":result.rows.item(0).actores
            });
            }
            
            
            
         
            
            
        /*  var alertPopup = $ionicPopup.alert({
       title: 'Agenda',
       template: 'Datos almacenados'+chats[0].nombre
     });*/
      statusMessage = chats[0].nombre;
            
        },
        function(error){
         statusMessage="Error "+ error.message;  
        });
        
     return chats;
    }
};
 
 
 
 
 
 

  
});
