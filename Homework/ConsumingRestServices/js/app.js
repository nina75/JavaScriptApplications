require.config({
    baseUrl: 'js',
    paths: {
        'requester': 'models/requester'
    }
});

require(['requester'], function(Requester) {
    var bookRequester = new Requester();

    //list all books
    bookRequester.listAllBooks(function(books) {
        books.forEach(function(book) {
            addBookToDom(book);
        });
    }, function(error) {
        console.log(error);
    });

    //add new book
    $('#add-book-btn').on('click', function() {
        var title = $('#title').val(),
            author = $('#author').val(),
            isbn = $('#isbn').val();
        bookRequester.createBook({title:title,author:author, isbn:isbn}, function(book) {
                addBookToDom(book);
            }, function(error) {
                console.log(error);
            }
        );
    });

    //add book to DOM
    function addBookToDom(book) {
        var bookEl = $('<li>'),
            titleEl = $('<span>').text(' Title: ' + book.title),
            authorEl = $('<span>').text(' Author: ' + book.author),
            isbnEl = $('<span>').text(' ISBN: ' + book.isbn),
            editBtn = $('<button>').text('Edit'),
            deleteBtn = $('<button>').text('Delete'),
            bookDataEl = $('<div>').attr('id', book._id);
        bookEl.append(titleEl).append(authorEl).append(isbnEl).append(editBtn).append(deleteBtn).append(bookDataEl);

        //edit book
        editBtn.on('click', function() {
            var titleField = $('<input>').attr({value: book.title}),
                authorField = $('<input>').attr({value: book.author}),
                isbnField = $('<input>').attr({value: book.isbn}),
                okBtn = $('<button>').text('OK'),
                cancelBtn = $('<button>').text('Cancel');
            okBtn.on('click', function() {
                var title = titleField.val(),
                    author = authorField.val(),
                    isbn = isbnField.val();
                bookRequester.updateBook('572381592790eb2a26819183', {title:title, author: author, isbn: isbn}, function(book) {
                    titleEl.text(' Title: ' + book.title);
                    authorEl.text(' Author: ' + book.author);
                    isbnEl.text(' ISBN: ' + book.isbn);
                }, function(error) {
                    console.log(error);
                });
            });
            bookDataEl.append(titleField).append(authorField).append(isbnField).append(okBtn).append(cancelBtn);
        });
        $('#wrapper ul').append(bookEl);
    }


    //bookRequester.deleteBook('57237f28c3953dc30e74e9c7', function(data) {
    //    console.log(data);
    //}, function(error) {
    //    console.log(error);
    //});
});