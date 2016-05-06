require.config({
    paths: {
        'domModule': 'domModule'
    }
});

require(['domModule'], function(domModule) {
    var li = $('#initial');

    $('#add-before-btn').click(function() {
        var newItem = $('<li>').text('New item');
        domModule.addBefore(newItem, li);
    });

    $('#add-after-btn').click(function() {
        var newItem = $('<li>').text('New item');
        domModule.addAfter(newItem, li);
    });

});