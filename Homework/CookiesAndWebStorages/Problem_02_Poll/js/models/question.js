define(['answer'], function(Answer) {
    return (function() {
        var id = 0;
        function Question(text) {
            this.id = ++id;
            this.text = text;
            this.answers = [];
        }

        Question.prototype.addAnswer = function(text, isCorrect) {
            this.answers.push(new Answer(this.id, text, isCorrect));
        };

        return Question;
    })();
});