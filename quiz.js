// 1. Start with the Function Declaration
function checkAnswer() {
    // 2. Identify the Correct Answer
    const correctAnswer = "4";

    // 3. Retrieve the User’s Answer
    // document.querySelector selects the specific radio button that is checked
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Extract the value from the selected radio button
    const userAnswer = selectedRadio.value;

    // 4. Compare the User’s Answer with the Correct Answer
    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// 5. Add an Event Listener to the Submit Button
// We select the button and tell it to run checkAnswer when clicked
document.getElementById('submit-answer').addEventListener('click', checkAnswer);