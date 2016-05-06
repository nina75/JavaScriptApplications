define([], function() {
   return (function() {
       function Requester() {
           
       }

       Requester.prototype.getCountries = function (success, error) {
           $.ajax({
               method: "GET",
               headers: {
                   "Authorization" : "Basic UGVzaG86MTIzNDU2"
               },
               url: "https://baas.kinvey.com/appdata/kid_-JuE_LX0gW/countries",
               success: success,
               error: error
           });
       };

       Requester.prototype.addCountry = function(countryName, success, error) {
           $.ajax({
               method: "POST",
               headers: {
                   "Authorization" : "Basic UGVzaG86MTIzNDU2",
                   "Content-Type":"application/json"
               },
               data: JSON.stringify({name: countryName}), //{"name":countryName} --> така не става!!!
               url: "https://baas.kinvey.com/appdata/kid_-JuE_LX0gW/countries",
               success: success,
               error: error
           });
       };

       Requester.prototype.addTown = function(townName, countryId, success, error) {
           $.ajax({
               method: "POST",
               headers: {
                   "Authorization" : "Basic UGVzaG86MTIzNDU2",
                   "Content-Type":"application/json"
               },
               data: JSON.stringify({name: townName, country:{"_type":"KinveyRef",_id:countryId, _collection:"countries"}}), //{"name":countryName} --> така не става!!!
               url: "https://baas.kinvey.com/appdata/kid_-JuE_LX0gW/towns",
               success: success,
               error: error
           });
       };

       Requester.prototype.deleteCountry = function(countryId, success, error) {
           $.ajax({
              method: 'DELETE',
               headers: {
                   "Authorization" : "Basic UGVzaG86MTIzNDU2"
               },
               url: 'https://baas.kinvey.com/appdata/kid_-JuE_LX0gW/countries/' + countryId,
               success: success,
               error: error
           });
       };

       Requester.prototype.deleteTown = function(townId, success, error) {
           $.ajax({
               method: 'DELETE',
               headers: {
                   "Authorization" : "Basic UGVzaG86MTIzNDU2"
               },
               url: 'https://baas.kinvey.com/appdata/kid_-JuE_LX0gW/towns/' + townId,
               success: success,
               error: error
           });
       };

       Requester.prototype.updateCountry = function(countryId, countryName, success, error) {
           $.ajax({
               method: 'PUT',
               headers: {
                   "Authorization" : "Basic UGVzaG86MTIzNDU2"
               },
               url: 'https://baas.kinvey.com/appdata/kid_-JuE_LX0gW/countries/' + countryId,
               data: {"name":countryName}, //JSON.stringify({name: countryName})--> така не става!!!
               success: success,
               error: error
           });
       };

       Requester.prototype.updateTown = function(townId, townName, countryId, success, error) {
           $.ajax({
               method: 'PUT',
               headers: {
                   "Authorization" : "Basic UGVzaG86MTIzNDU2"
               },
               url: 'https://baas.kinvey.com/appdata/kid_-JuE_LX0gW/towns/' + townId,
               data:{"name":townName,"country":{"_type":"KinveyRef","_id":countryId,"_collection":"countries"}},
               success: success,
               error: error
           });
       };


       Requester.prototype.getTownsByCountry = function(countryId, success, error) {
           $.ajax({
               method: 'GET',
               headers: {
                   "Authorization" : "Basic UGVzaG86MTIzNDU2"
               },
               url: 'https://baas.kinvey.com/appdata/kid_-JuE_LX0gW/towns?query={"country._id":"' + countryId + '"}',
               success: success,
               error: error
           });
       };

       return new Requester;
   })();
});
