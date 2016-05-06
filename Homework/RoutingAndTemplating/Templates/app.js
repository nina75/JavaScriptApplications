var persons = {
    persons: [
        {name: 'Garry Finch', jobTitle: 'Front End', website: 'http://weewe.com'},
        {name: 'Pesho', jobTitle: 'JS developer', website: 'http://wd.com'},
        {name: 'Gosho', jobTitle: 'JAva dev', website: 'http://faaf.com'},
        {name: 'Tamara', jobTitle: 'Senior .Net dev', website: 'http://abv.com'},
        {name: 'Minka', jobTitle: 'Vodoprovodchik', website: 'http://assaa.com'}]

};

$.get('person.html', function(personHtml) {
    var outputHtml = Mustache.render(personHtml, persons);
    $('#table-content').html(outputHtml);
});



