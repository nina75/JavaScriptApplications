define(['generator'], function(questions) {
    return (function() {
        function loadHtml() {
            questions.forEach(function(question) {
                var questionContainer = $('<li>'),
                    titleContainer = $('<p>'),
                    answersContainer = $('<ul>');

                question.answers.forEach(function(answer) {
                    var answerContainer = $('<li>'),
                        answerTextContainer = $('<label>'),
                        checkButton = $('<input>');
                    checkButton.attr({type: 'radio', name: 'question' + question.id, value: answer.id, id: answer.id});
                    answerTextContainer.text(answer.text).attr('for', answer.id);
                    answerContainer.append(checkButton);
                    answerContainer.append(answerTextContainer);
                    answersContainer.append(answerContainer);
                });

                titleContainer.text(question.text).appendTo(questionContainer);
                answersContainer.appendTo(questionContainer);
                questionContainer.appendTo($('#questions-container'));
            });
        }

        return {
            loadHtml: loadHtml
        }
    })();
});