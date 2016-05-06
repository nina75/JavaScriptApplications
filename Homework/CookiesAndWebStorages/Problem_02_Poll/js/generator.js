define(['question'], function(Question) {
    return (function() {
        var question1 = new Question('What does HTML stand for?'),
            question2 = new Question('Who is making the Web standards?'),
            question3 = new Question('Choose the correct HTML element to define important text:'),
            question4 = new Question('С какво се отпечатва char във C++?'),
            questions;

        question1.addAnswer('Hyper Text Markup Language', true);
        question1.addAnswer('Home Tool Markup Language', false);
        question1.addAnswer('Hyperlinks and Text Markup Language', false);
        question1.addAnswer('How To Meet Ladies', false);

        question2.addAnswer('Microsoft', false);
        question2.addAnswer('Google', false);
        question2.addAnswer('Mozilla', false);
        question2.addAnswer('The World Wide Web Consortium', true);

        question3.addAnswer('<b>', false);
        question3.addAnswer('<important>', false);
        question3.addAnswer('<strong>', true);
        question3.addAnswer('<i>', false);

        question4.addAnswer('cin', false);
        question4.addAnswer('cout', true);
        question4.addAnswer('include', false);
        question4.addAnswer('while', false);

        questions = [question1, question2, question3, question4];
console.log(questions);
        return questions;
    })();
});