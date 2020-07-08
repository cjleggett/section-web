document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#setup').onsubmit = startGame;
    document.querySelector('#questions').onsubmit = endGame;
    document.querySelector('#again').addEventListener('click', () => {
        location.reload();
    });
})

// Global variable storing questions
var QS = [];

startGame = () => {
    
    // Get information from submission:
    const number = document.querySelector('#num').value;
    const difficulty = document.querySelector('#dif').value;
    const type = document.querySelector('#type').value;

    // Form url:
    let url = `https://opentdb.com/api.php?amount=${number}`;
    if (difficulty !== "any") {
        url = `${url}&difficulty=${difficulty}`;
    }
    if (type !== "any") {
        url = `${url}&type=${type}`;
    }

    // Get questions from API:
    fetch(url)
    .then(response => response.json())
    .then(data => {
        playGame(data["results"]);

        // Store questions in global variable
        QS = data["results"];
    });

    // Prevent form submission
    return false;
}

playGame = results => {
    // hide original form and show new one
    document.querySelector('#setup').style.display = 'none';
    document.querySelector('#choose').style.display = 'none';    
    document.querySelector('#questions').style.display = 'inline';

    // Create a submit button for the form
    const form = document.querySelector('#questions');
    subButton = document.createElement('button');
    subButton.classList.add('btn');
    subButton.classList.add('btn-primary');
    subButton.type = 'submit';
    subButton.id = 'ans-sub';
    subButton.innerHTML = 'Submit!';

    // Add each question to the form
    results.forEach((question, index) => {
        form.appendChild(makeQuestion(question, index));
    });

    // Add submit button for the form
    form.appendChild(subButton);
}

makeQuestion = (question, index) => {

    // Creates a form-group div for the question
    q = document.createElement('div');
    q.classList.add('form-group');
    q.id = `question-${index}`;

    // If The question is true/false, add the true or false dropdown
    if (question["type"] === "boolean") {
        q.innerHTML = `<label for="${q-index}">${question["question"]}</label>
                       <select class="form-control" id="q-${index}">
                       <option>True</option>
                       <option>False</option>
                       </select>`;
    } else {

        // If the question is mc, make an array with all answers
        let answers = question["incorrect_answers"].concat([question["correct_answer"]]);

        // Randomizing order of array
        let shuffled = answers
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

        // Add the multiple choice dropdown
        q.innerHTML = `<label for="${q-index}">${question["question"]}</label>
                       <select class="form-control" id="q-${index}">
                       <option>${shuffled[0]}</option>
                       <option>${shuffled[1]}</option>
                       <option>${shuffled[2]}</option>
                       <option>${shuffled[3]}</option>
                       </select>`;
    }

    // Return the form
    return q;
}

endGame = () => {

    // Counter for correct answers
    let correct = 0;

    QS.forEach((question, index) => {
        // Find elements for the div containing the question and the input
        let ans_in = document.querySelector(`#q-${index}`);
        let onPage = document.querySelector(`#question-${index}`);

        // Accessing the user's selected answer
        ans = ans_in.value;

        // For a correct answer, add one to correct and turn question green
        if (ans === question["correct_answer"]) {
            correct += 1;
            onPage.style.backgroundColor = 'chartreuse';
        } 
        // For an incorrect answer, change background to red and display the correct answer
        else {
            onPage.style.backgroundColor = 'lightcoral';
            let realAnswer = document.createElement('p');
            realAnswer.innerHTML = `Correct Answer: ${question["correct_answer"]}`;
            onPage.insertBefore(realAnswer, ans_in);
        }
    });

    // Display the number correct and the play again button
    document.querySelector('#final-score').innerHTML = `${correct}/${QS.length} Correct!`;
    document.querySelector('#again').style.display = 'inline';

    // Hide the submit button for the answers and disable the inputs
    document.querySelector('#ans-sub').style.display = 'none';
    document.querySelectorAll('select').forEach(elt => {
        elt.disabled = true;
    })
    
    // Prevent default action
    return false;
}