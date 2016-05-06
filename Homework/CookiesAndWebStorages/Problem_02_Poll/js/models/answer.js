define([], function() {
    return (function() {
        var id = 0;
        function Answer(questionId, text, isCorrect) {
            this.id = ++id;
            this.questionId = questionId;
            this.text = text;
            this.isCorrect = isCorrect;
        }

        return Answer;
    })();
});