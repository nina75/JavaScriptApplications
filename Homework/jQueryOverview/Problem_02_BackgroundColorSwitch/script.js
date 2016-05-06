function changeColor() {
    var color = $('input[type=color]').val(),
        element = '.' + $('input[type=text]').val();
    $(element).css('background-color', color);
}

$('button').click(changeColor);