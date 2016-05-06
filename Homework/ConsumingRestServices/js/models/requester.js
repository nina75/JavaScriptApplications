define([], function() {
   return (function() {
       function Requester() {

       }
       Requester.prototype.listAllBooks = function(success, error) {
           $.ajax({
               type: 'GET',
               url: 'https://baas.kinvey.com/appdata/kid_W1CHtkdAb-/books',
               headers: {
                   'Authorization':'Basic cGVzaG86MTIzNDU2'
               },
               success: success,
               error: error
           });
       };

       Requester.prototype.createBook = function(data, success, error) {
           $.ajax({
               type: 'POST',
               url:'https://baas.kinvey.com/appdata/kid_W1CHtkdAb-/books',
               headers: {
                   'Authorization':'Basic cGVzaG86MTIzNDU2',
                   'Content-Type':'application/json'
               },
               data: JSON.stringify(data),
               success: success,
               error: error
           });
       };

       Requester.prototype.updateBook = function(bookId, data, success, error) {
           $.ajax({
               type: 'PUT',
               url: 'https://baas.kinvey.com/appdata/kid_W1CHtkdAb-/books/' + bookId,
               headers: {
                   'Authorization':'Basic cGVzaG86MTIzNDU2',
                   'Content-Type':'application/json'
               },
               data: JSON.stringify(data),
               success: success,
               error: error
           });
       };

       Requester.prototype.deleteBook = function(bookId, success, error) {
           $.ajax({
               type: 'DELETE',
               url: 'https://baas.kinvey.com/appdata/kid_W1CHtkdAb-/books/' + bookId,
               headers: {
                   'Authorization':'Basic cGVzaG86MTIzNDU2',
                   'Content-Type':'application/json'
               },
               success: success,
               error: error
           });
       };

       return Requester;
   })();
});