(function() {
    function showGreeting() {
        greetingContainer.innerText = 'Hello ' + localStorage.getItem('name');
        loginContainer.style.display = 'none';
        greetingContainer.style.display = 'block';
    }

    var loginContainer = document.getElementById('login'),
        greetingContainer = document.getElementById('greeting'),
        submitButton = document.getElementsByTagName('button')[0],
        sessionVisitsContainer = document.querySelectorAll('#session-visits span')[0],
        totalVisitsContainer = document.querySelectorAll('#total-visits span')[0];

    if(!localStorage.name) {
        greetingContainer.style.display = 'none';
        loginContainer.style.display = 'block';
        submitButton.addEventListener('click', function(){
            localStorage.setItem('name', document.getElementById('name').value);
            showGreeting();
        });
    } else {
        showGreeting();
    }

    if(!sessionStorage['count']) {
        sessionStorage.setItem('count', 0);
    }
    if(!localStorage['count']) {
        localStorage.setItem('count', 0);
    }

    sessionStorage['count']++;
    localStorage['count']++;

    sessionVisitsContainer.innerText = sessionStorage['count'];
    totalVisitsContainer.innerText = localStorage['count'];
})();