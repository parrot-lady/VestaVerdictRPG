var prevActions = [];

var dialogueSystem = [
    {   // 0
        "question":"Start",
        "answers":[
            {"title":" < oh wow. a dying lady!","response":1},
            {"title":" < opt 2 testing","response":1},
            {"title":" < opt 3 testing","response":1}
            ]
    },
    {
        // 1
        "question":"LADY: help, i've fallen and i can't get my fruit!",
        "answers":[
            {"title":" < don't worry. i'll find it.","response":8}
            ]
    },
    {
        // 2
        "question":"LADY: Keke, you cursed forever now.",
        "answers":[
            {"title":" < :[","response":7},
            ]
    },
    {
        // 3
        "question":"LADY: legitness. my throat be dry too though.",
        "answers":[
            {"title":" < yes, m'aam. fountain water coming right up","response":4},
            {"title":" < unfortunately not my problem.","response":6}
            ]
    },
    {
        // 4
        "question":"LADY: Thanks man. Your purse looks lit, can I buy it?",
        "answers":[
            {"title":" < ya.","response":5},
            {"title":" < nah, it's my mum's.","response":6}
            ]
    },
    {
        // 5
        "question":"LADY: Aight here's your cash.",
        "answers":[
            {"title":" < im rich","response":7}
        ]
    },
    {
        // 6
        "question":"LADY: >:[ ",
        "answers":[
            {"title":" < :o","response":2},
            ]
    },
    {
        // 7
        "question":"Game Over",
        "answers":[
            {"title":" < Restart","response":0},
            ]
    },
    {
        // 8
        "question":"You found the fruit.",
        "answers":[
            {"title": " < Press to eat the fruit.","response":9},
            {"title": " < Press to return the fruit.","response":10}
        ]
    },
    {
        // 9
        "question":"LADY: Where my fruit at?",
        "answers":[
            {"title": " <  ate it omnomnom.","response": 6},
        ]
    },
    {
        // 10
        "question":"LADY: Where my fruit at?",
        "answers":[
            {"title": " < here you go.","response": 3},
        ]
    }
    ];
    


var currentConvo = 0;
var first = true;


window.printcurrentConvo = function(){
    //sets innerhtml of question to the question part
    // document.getElementById("question").innerHTML = dialogueSystem[currentConvo].question;
    var answers = "";
    // for length of answer options for the question
    for(var i=0,l=dialogueSystem[currentConvo].answers.length;i<l;i++){
        // CHANGE BUTTON STUFF HERE UWU
        // basically formats html so each title is given its own <p> and <button>
        // and also setConvo on click, which prints things out and moves the convo location
        answers += "<p><button id='butt' class='choices' onclick='setConvo("+dialogueSystem[currentConvo].answers[i].response+")'>"+dialogueSystem[currentConvo].answers[i].title+"</button></p>";
        // <p><button class='choices' onclick='setConvo(dialogueSystem[currentConvo].answers[i].response)'>dialogueSystem[currentConvo].answers[i].title</button></p>
    }
    // sets the div html id'd answers with the variable stuff above
    document.getElementById("answers").innerHTML = answers;
}

window.setConvo = function(num) {
    currentConvo = num;
    setTimeout(function(){
        window.printcurrentConvo();
    }, 401);
}

window.printcurrentConvo(); 

    
var clicks = 0;
// 0 = all hidden
// 1 = unhidden box, unhidden question, unhidden/faded in answers
// 2 = none hidden, reset to 0

document.body.onkeyup = function(e){

    if (e.keyCode == 32 & clicks == 0) {
        // alert('immediate space');
        clicks = 1;
        document.getElementById('boxImage').classList.toggle('hidden');

        var i = 0;
        var qText = dialogueSystem[currentConvo].question;

        var speed;
        var fast = 25;
        var medium = 50;
        var slow = 100;

        if (qText.length < 10) {
            speed = slow;
        } else if (qText.length > 10 & qText.length < 15) {
            speed = medium;
        } else {
            speed = fast;
        }

        setTimeout(function(){
            document.getElementById('question').classList.toggle('hidden');
        }, speed);

        var consoleTyper = setInterval(function () {
            if (i != qText.length) {
                i += 1;
                document.getElementById("question").innerHTML = qText.substr(0, i);
            }
            else
            {
                clearInterval(consoleTyper);   
                // alert('answers toggle');
                document.getElementById('answers').classList.toggle('hidden');
            }}, speed);
        

    }

    document.getElementById("answers").onclick = function(event) {
        setTimeout(function(){
            document.getElementById('boxImage').classList.toggle('hidden');
            document.getElementById('question').classList.toggle('hidden');
            document.getElementById('answers').classList.toggle('hidden');
            }, 200);
        clicks = 0;
        event.preventDefault();
    }
}