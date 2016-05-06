function generateTable() {
    var data = JSON.parse($('textarea').val());
    var tableBody = $('tbody');
    $('table').css('display', 'block');
    data.forEach(function(car) {
        var row = $('<tr>'),
            rowHtml = '';
        for(var prop in car) {
            rowHtml += '<td>' + car[prop]+ '</td>';
        }
        row.html(rowHtml);
        tableBody.append(row);
    });
}

$('button').click(generateTable);
