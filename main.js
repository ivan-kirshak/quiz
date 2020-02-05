let answerBtn = document.getElementById("answerBtn");
let answer = document.getElementsByName("answer");
let results = document.getElementById("results");
let anotherq = document.getElementById("anotherq");
let newQuestion = document.getElementById("newQuestion");
let newResult = document.getElementById("newResult");

function check() {
    let question = document.getElementsByName("question");
    if (question[0].checked) {
        newResult.innerHTML = `<h1 class="true">Yes, you're right!. <br>
        To try again, click "Give me another question" button above</h1>`;
    } else {
        newResult.innerHTML = `<h1 class="false">Sorry, not true. <br>
        To try again, click "Give me another question" button above</h1>`;
    }
}

function giveQuestion() {
    const XHR = new XMLHttpRequest();
    let URI = `https://opentdb.com/api.php?amount=1`;
    XHR.addEventListener("readystatechange", function () {
        if (XHR.status === 200 && XHR.readyState === 4) {
            let result = JSON.parse(XHR.responseText);
            console.log(result);
            if (result.results[0].type === "boolean") {
                newQuestion.innerHTML = `
            <h1 class="question">${result.results[0].question}?</h1>
            <div class="answers">
            <label><input name="question" type="radio" class="correct"> ${result.results[0].correct_answer}</label>
            <label><input name="question" type="radio" > ${result.results[0].incorrect_answers[0]}</label>
            </div>
            <button onclick="check()" class="answerBtn">Submit</button>
            `;
            } else {
                newQuestion.innerHTML = `
                <h1 class="question">${result.results[0].question}?</h1>
                <div class="answers">
                <label><input name="question" type="radio" class="correct"> ${result.results[0].correct_answer}</label>
                <label><input name="question" type="radio" > ${result.results[0].incorrect_answers[0]}</label>
                <label><input name="question" type="radio" > ${result.results[0].incorrect_answers[1]}</label>
                <label><input name="question" type="radio" > ${result.results[0].incorrect_answers[2]}</label>
                </div>
                <button onclick="check()" class="answerBtn">Submit</button>
                `;
            }
        }
    }, false);
    XHR.open("GET", URI);
    XHR.send();
}

function lookForAnswer() {
    for (let i = 0; i < answer.length; i++) {
        if (answer[2].checked) {
            results.innerHTML = `<h1 class="true">You're correct!</h1>`
        } else {
            results.innerHTML = `<h1 class="false">Sorry, not true.</h1>`
        }
    }
    //creation of button for another question 
    let moreq = document.createElement("button");
    moreq.innerText = "Give me another question";
    moreq.classList.add("answerBtn");
    anotherq.appendChild(moreq);
    moreq.addEventListener("click", giveQuestion, false);
}
answerBtn.addEventListener("click", lookForAnswer, false);