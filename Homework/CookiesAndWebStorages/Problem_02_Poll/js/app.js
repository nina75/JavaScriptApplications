require.config({
    paths: {
        'question': 'models/question',
        'answer': 'models/answer',
        'generator': 'generator',
        'extensions': 'helpers/extensions'
    }
});

require(['html-loader', 'generator', 'question', 'extensions'], function(loader, questions) {
    loader.loadHtml();
    var minutes = 5,
        seconds = 0,
        userAnswers = [],
        showResult = function() {
            var allQuestionsCount = questions.length,
                correctAnswersCount = 0;
            userAnswers.forEach(function(answer){
                var question = questions.filter(function(q) {
                        return q.id === answer.questionId;
                    })[0],
                    correctAnswerId = question.answers.filter(function(a) {
                        return a.isCorrect;
                    })[0].id;

                $('#' + correctAnswerId).next().css('background-color', 'lightgreen');
                if(answer.answerId === correctAnswerId) {
                    correctAnswersCount++;
                } else {
                    $('#' + answer.answerId).next().css('background-color', '#FFA28E');
                }
            });
            $('#submit-btn').hide();
            $('#quiz-result').text('Result: ' + correctAnswersCount + '/' + allQuestionsCount);

            $('input').attr('disabled', 'disabled');
            localStorage.removeItem('answers');
            clearInterval(timer);
        },
        showTimer = function () {
            var timeLeft = '';
            seconds--;
            if(seconds === -1) {
                minutes--;
                seconds = 59;
            }
            timeLeft += minutes + ':';
            if(seconds < 10) {
                timeLeft += '0';
            }
            timeLeft += seconds;
            $('#timer-container').text(timeLeft);
            if(minutes === 0 && seconds === 0) {
                clearInterval(timer);
                $('#submit-btn').off('click', '#submit-btn', showResult).hide();
                $('input').attr('disabled', 'disabled');
                $('#quiz-result').text('Time is over...');
            }
        },
        timer = setInterval(showTimer, 10);

    questions.forEach(function(question) {
       userAnswers.push({questionId: question.id, answerId: 0});
    });
    
    if(localStorage['answers']) {
        userAnswers = localStorage.getObject('answers').slice();
        userAnswers.forEach(function(answer) {
            var answerId = answer.answerId;
            $('#' + answerId).attr('checked', 'checked');
        });
    }
    
    $('input[type=radio]').on('change', function(e) {
        var questionId = parseInt(e.target.name.substring(8)),
            answerId = parseInt(e.target.id),
            answer = userAnswers.filter(function(answer) {
            return answer.questionId === questionId;
        })[0];

        answer.answerId = answerId;
        localStorage.setObject('answers', userAnswers);
    });
    
    $('button').on('click', showResult);
});