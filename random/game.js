const level = localStorage.getItem("level")
const maxLevel = document.getElementById("max-number")
const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkButton = document.querySelector("button"),
    remainChances = document.querySelector(".chances");

input.focus();

chance = 10;
let max = 0

const CheckLevel = (level) => {
    if (level == null) {
        window.location.href = "level.html"
    }
}

if (level == 1) max = 100;
else if (level == 2) max = 1000;
else if (level == 3) max = 10000;
else max = 0;

maxLevel.innerHTML = max;
let randomNum = Math.floor(Math.random() * max);

checkButton.addEventListener("click", () => {
    chance--;
    let inputValue = input.value;
    if (inputValue == randomNum) {
        [guess.textContent, input.disabled] = ["Congratulations", true];
        [checkButton.textContent, guess.style.color] = ["Replay", "#333"];
    } else if (inputValue > randomNum && inputValue < 100) {
        [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
        guess.style.color = "#333";
    } else if (inputValue < randomNum && inputValue > 0) {
        [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
        guess.style.color = "#333";
    } else {
        [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
        guess.style.color = "#DE0611";
    }
    if (chance == 0) {
        [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
        [guess.textContent, guess.style.color] = ["You lost the game", "#DE0611"];
    }
    if (chance < 0) {
        window.location.reload();
    }
});



document.getElementById('checklevel').addEventListener('', CheckLevel(level))
