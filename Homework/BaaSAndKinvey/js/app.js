require.config({
    baseUrl: 'js',
    paths: {
        'requester':'models/requester'
    }
});

require(['requester'], function(requester) {
    requester.getCountries(function(countries){
        countries.forEach(function(country) {
            addCountryToDom(country);
        });
    }, function(error){
        console.log(error);
    });

    $('#add-country-btn').on('click', function() {
        var countryName = $('#country-name').val();
        requester.addCountry(countryName, function(addedCountry){
            //console.log(addedCountry.name);
            //console.log(addedCountry._id);

            addCountryToDom(addedCountry);
            $('#country-name').val('');
        }, function(error) {
            console.log(error);
        });
        
    });
    
    function addCountryToDom(country){
        var currentCountryContainer = $('<li>'),
            countryNameElement = $('<span>').text(country.name),
            editBtn = $('<button>').text('Edit'),
            deleteBtn = $('<button>').text('Delete'),
            showTownsBtn = $('<button>').text('Show Towns');
        countryNameElement.appendTo(currentCountryContainer);
        editBtn.appendTo(currentCountryContainer);
        deleteBtn.appendTo(currentCountryContainer);
        showTownsBtn.appendTo(currentCountryContainer);
        $("#country-container").append(currentCountryContainer);

        editBtn.on('click', function() {
            var editBox = $('<div>'),
                countryNewNameElement = $('<input>').attr({type: 'text', value: country.name}),
                okBtn = $('<button>').text('OK'),
                cancelBtn = $('<button>').text('Cancel');
            editBtn.attr('disabled', 'disabled');
            countryNewNameElement.appendTo(editBox);
            okBtn.appendTo(editBox);
            cancelBtn.appendTo(editBox);
            editBox.appendTo(currentCountryContainer);

            okBtn.on('click', function() {
                var newName = countryNewNameElement.val();
                editBtn.removeAttr('disabled');
                requester.updateCountry(country._id, newName, function(updatedCountry) {

                    countryNameElement.text(updatedCountry.name);
                    editBox.remove();
                }, function(error) {
                    console.log(error);
                })
            });
            cancelBtn.on('click', function(){
                editBtn.removeAttr('disabled');
                editBox.remove();
            });

        });

        deleteBtn.on('click', function() {
            requester.deleteCountry(country._id, function(){
                currentCountryContainer.remove();
            }, function(err) {
                console.log(err);
            });
        });

        showTownsBtn.on('click', function(){
           requester.getTownsByCountry(country._id, function(towns){
               var townsMainContainer = $('<div>'),
                   townsUl = $('<ul>').attr('id', 'towns-container'),
                   townNameContainer = $('<input>').attr('placeholder', 'Town name'),
                   addTownBtn = $('<button>').text('Add Town');
               towns.forEach(function(town) {
                   addTownToDom(town, townsUl);
               });

               townsUl.appendTo(townsMainContainer);
               townNameContainer.appendTo(townsMainContainer);
               addTownBtn.appendTo(townsMainContainer);
               townsMainContainer.appendTo(currentCountryContainer);


               //todo
               addTownBtn.on('click', function() {
                   var townName = townNameContainer.val();
                   requester.addTown(townName, country._id, function(addedTown){
                      console.log(addedTown.name);
                       console.log(addedTown._id);

                       addTownToDom(addedTown, townsUl);
                       townNameContainer.val('');
                   }, function(error) {
                       console.log(error);
                   });
               });
           }, function(error) {
               console.log(error);
           })
        });
    }

    function addTownToDom(town, container){
        var currentTownContainer = $('<li>'),
            townNameElement = $('<span>').text(town.name),
            editBtn = $('<button>').text('Edit'),
            deleteBtn = $('<button>').text('Delete');

        townNameElement.appendTo(currentTownContainer);
        editBtn.appendTo(currentTownContainer);
        deleteBtn.appendTo(currentTownContainer);
        $(container).append(currentTownContainer);

        editBtn.on('click', function() {
            var editBox = $('<div>'),
                townNewNameElement = $('<input>').attr({type: 'text', value: town.name}),
                okBtn = $('<button>').text('OK'),
                cancelBtn = $('<button>').text('Cancel');
            editBtn.attr('disabled', 'disabled');
            townNewNameElement.appendTo(editBox);
            okBtn.appendTo(editBox);
            cancelBtn.appendTo(editBox);
            editBox.appendTo(currentTownContainer);

            okBtn.on('click', function() {
                var newName = townNewNameElement.val();
                editBtn.removeAttr('disabled');
                requester.updateTown(town._id, newName, town.country._id, function(updatedTown) {

                    townNameElement.text(updatedTown.name);
                    editBox.remove();
                }, function(error) {
                    console.log(error);
                })
            });
            cancelBtn.on('click', function(){
                editBtn.removeAttr('disabled');
                editBox.remove();
            });

        });

        deleteBtn.on('click', function() {
            requester.deleteTown(town._id, function(data){
                console.log(data);
                currentTownContainer.remove();
            }, function(err) {
                console.log(err);
            });
        });
    }
});