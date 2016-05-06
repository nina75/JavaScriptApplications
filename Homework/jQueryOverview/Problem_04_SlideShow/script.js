(function() {
    var timer = setInterval(changeImage, 3000);

    function changeImage() {
        var current = $('.current'),
            next = current.next();
        current.css('z-index', '9');
        if(!(next[0] instanceof HTMLLIElement)) {
            next = $('#first');
        }
        next.css('z-index', '10');
        current.removeClass('current');
        next.addClass('current');
    }

    function getNextImg() {
        var current = $('.current'),
            next = current.next();
        clearInterval(timer);
        current.css('z-index', '9');
        if(!(next[0] instanceof HTMLLIElement)) {
            next = $('#first');
        }
        next.css('z-index', '10');
        current.removeClass('current');
        next.addClass('current');
    }

    function getPreviousImg() {
        var current = $('.current'),
            prev = current.prev();
        clearInterval(timer);
        current.css('z-index', '9');
        if(!(prev[0] instanceof HTMLLIElement)) {
            prev = $('#fourth');
        }
        prev.css('z-index', '10');
        current.removeClass('current');
        prev.addClass('current');
    }

    $('#next-btn').click(getNextImg);
    $('#prev-btn').click(getPreviousImg);
})();

sessionStorage.setItem/getItem



