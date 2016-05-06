var persons = {
    names: [
        {name:'Bob'},
        {name:'Tamara'},
        {name:'Spas'},
        {name:'Spaska'},
        {name:'Boby'}
    ]
};

var router = Sammy(function() {
    var selector = $('#names-list');

    this.get('#/', function() {
        $.get('personsTemplate.html', function(templ) {
            selector.html(Mustache.render(templ, persons));
        });
    });

    this.get('#/:name', function() {
        $('#content').html('Hello, ' + this.params['name']);
    });
});

router.run('#/');


