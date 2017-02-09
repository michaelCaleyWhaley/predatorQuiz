
var quiz = (function(){
    var storedResults = [];
    var score = 0;
    var increment = 0;
    
    var questions = [
        'What is Dylan pushing too many of?',
        'What happened to Hopper?', 
        'What don\'t you have time for?',
        'What does chewing tabacoo achieve?',
        'Who decides it\'s a good idea to fight the predator hand to hand?'
    ];
    
    var answers = [
        'Pencils',
        'He was skinned alive',
        'To bleed',
        'Turns you into a tyrannosaurus rex',
        'Billiiiieeeeeeee'
    ];
    
    var options = [
        ['<input type="radio" name="predOne" value="Pencils">Pencils<br><input type="radio" name="predOne" value="Dumbells">Dumbells<br><input type="radio" name="predOne" value="Hamburgers">Hamburgers<br><input type="radio" name="predOne" value="People">People'],
        ['<input type="radio" name="predTwo" value="He had a great time">He had a great time<br><input type="radio" name="predTwo" value="He got married">He got married<br><input type="radio" name="predTwo" value="He was skinned alive">He was skinned alive<br><input type="radio" name="predTwo" value="He time travelled">He time travelled'],
        ['<input type="radio" name="predThree" value="Your nonsense">Your nonsense<br><input type="radio" name="predThree" value="To bleed">To bleed<br><input type="radio" name="predThree" value="To fight the Predator">To fight the Predator<br><input type="radio" name="predThree" value="To eat">To eat'],
        ['<input type="radio" name="predFour" value="Prevents crying">Prevents crying<br><input type="radio" name="predFour" value="Makes your parents proud">Makes your parents proud<br><input type="radio" name="predFour" value="Turns you into a tyrannosaurus rex">Turns you into a tyrannosaurus rex<br><input type="radio" name="predFour" value="Helps indegestion">Helps indegestion'],
        ['<input type="radio" name="predFive" value="Dutch">Dutch<br><input type="radio" name="predFive" value="Vladimir">Vladimir<br><input type="radio" name="predFive" value="Billiiiieeeeeeee">Billiiiieeeeeeee<br><input type="radio" name="predFive" value="Mike Caley">Mike Caley']
    ];

    var inputFields = document.getElementsByTagName('input');

    function insertContent() {
        document.getElementById('quiz-question').innerHTML = questions[increment];
        document.getElementById('quiz-answers').innerHTML = options[increment];
        document.getElementById('score-board').innerHTML = 'Current score: ' + score + '/' + questions.length;
    }

    function registerClick(){
        for (var i = 0; i < inputFields.length; i++){
            if(inputFields[i].checked){
                storedResults.push(inputFields[i].value)
                checkAnswers();
                increment++;
                insertContent();
                addClickEvent();
                quizEnd();
            }
        }
    }

    function checkAnswers(){
        score = 0;
        for(var i = 0; i < answers.length; i++){
            if(answers[i] === storedResults[i]){
                score++;
            }
        }
    }

    function addClickEvent(){
        for(var i = 0; i < inputFields.length; i++){
            inputFields[i].addEventListener('click', registerClick);
        }
    }

    function quizEnd(){
        if(increment === questions.length){
            document.getElementById('quiz-wrap').style.display = 'none';
            document.getElementById('results-screen').style.display = 'block';
            
            if(score > (increment/2)){
                document.getElementById('results-screen').style.backgroundImage = 'url("img/arnold.png")';
                document.getElementById('result-title').innerHTML = 'Predator Expert';
                document.getElementById('final-result').innerHTML = 'Final score: ' + score + '/' + questions.length;
                document.getElementById('result-description').innerHTML = 'You are one with Arnold and have studied his teaching to the letter for many years. Your neck is the width of the average mans torso...';
            } else {
                document.getElementById('results-screen').style.backgroundImage = 'url("img/trump.jpg")';
                document.getElementById('result-title').innerHTML = 'Pathetic Worm';
                document.getElementById('final-result').innerHTML = 'Final score: ' + score + '/' + questions.length;
                document.getElementById('result-description').innerHTML = 'Your ability to focus on meaningful things in life leaves something to be desired.';
            }
        }
    }
    
    return {
        init: function(){
            insertContent();
            addClickEvent();
        }
    }


})()



quiz.init();
    
    
    
    
    
    