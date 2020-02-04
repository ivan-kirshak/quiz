let answerBtn = document.getElementById("answerBtn");
let answer = document.getElementsByName("answer");
let results = document.getElementById("results");

function lookForAnswer() {
    for (let i = 0; i < answer.length; i++) {
        if (answer[2].checked){
            results.innerHTML = `<h1 class="true">You're correct!</h1>`
        } else {
            results.innerHTML = `<h1 class="false">Sorry, not true.</h1>`
        }
    }
}
answerBtn.addEventListener("click", lookForAnswer, false);