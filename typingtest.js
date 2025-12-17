const sentences = [
    "The quick brown fox jumps over the lazy dog. Morning sunshine HAHAHAHAHHAHAHAHAHAHAHAHAHAHA",
    "Practice typing daily to increase your speed, lab you langga.",
    "Artificial intelligence is changing the world.",
    "Fast typing requires accuracy and focus .",
    "JavaScript powers many interactive websites panot ikaw buan ka morning walay kamo taronga pag type langaya nimo boy paspasi sad ahhh ka weak"
];

let timeLeft = 30;
let timerInterval;

const timerDisplay = document.getElementById("timer");
const sentenceDisplay = document.getElementById("sentence");
const input = document.getElementById("input");
const startBtn = document.getElementById("startBtn");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

startBtn.addEventListener("click", startTest);

function startTest() {
    // reset
    input.value = "";
    timeLeft = 30;
    wpmDisplay.textContent = "0";
    accuracyDisplay.textContent = "0%";
    input.disabled = false;
    input.focus();

    // choose random sentence
    sentenceDisplay.textContent = sentences[Math.floor(Math.random() * sentences.length)];

    // start timer
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

function endTest() {
    clearInterval(timerInterval);
    input.disabled = true;

    const typed = input.value.trim();
    const original = sentenceDisplay.textContent.trim();

    // Calculate WPM
    const wordsTyped = typed.split(/\s+/).length;
    const wpm = Math.round((wordsTyped / 30) * 60);
    wpmDisplay.textContent = wpm;

    // Calculate Accuracy
    let correct = 0;
    for (let i = 0; i < Math.min(typed.length, original.length); i++) {
        if (typed[i] === original[i]) correct++;
    }
    const accuracy = ((correct / original.length) * 100).toFixed(2);
    accuracyDisplay.textContent = accuracy + "%";
}
