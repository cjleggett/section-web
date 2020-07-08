document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#setup').onsubmit = startGame;
    document.querySelector('#questions').onsubmit = endGame;
    document.querySelector('#again').addEventListener('click', () => {
        location.reload();
    });
})

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

    const form = document.querySelector('#questions');
    subButton = document.createElement('button');
    subButton.classList.add('btn');
    subButton.classList.add('btn-primary');
    subButton.type = 'submit';
    subButton.id = 'ans-sub';
    subButton.innerHTML = 'Submit!';

    results.forEach((question, index) => {
        form.appendChild(makeQuestion(question, index));
    });
    form.appendChild(subButton);
}

// Note: This is not a well-designed function! I shouldn't include so much HTML in my javascript
makeQuestion = (question, index) => {
    q = document.createElement('div');
    q.classList.add('form-group');
    q.id = `question-${index}`;
    if (question["type"] === "boolean") {
        q.innerHTML = `<label for="${q-index}">${question["question"]}</label>
                       <select class="form-control" id="q-${index}">
                       <option>True</option>
                       <option>False</option>
                       </select>`;
    } else {
        let answers = question["incorrect_answers"].concat([question["correct_answer"]]);

        // Randomizing order
        let shuffled = answers
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

        q.innerHTML = `<label for="${q-index}">${question["question"]}</label>
                       <select class="form-control" id="q-${index}">
                       <option>${shuffled[0]}</option>
                       <option>${shuffled[1]}</option>
                       <option>${shuffled[2]}</option>
                       <option>${shuffled[3]}</option>
                       </select>`;
    }

    return q;
}

endGame = () => {
    let correct = 0;
    QS.forEach((question, index) => {
        let ans_in = document.querySelector(`#q-${index}`);
        let onPage = document.querySelector(`#question-${index}`);
        ans = ans_in.value;
        if (ans === question["correct_answer"]) {
            correct += 1;
            onPage.style.backgroundColor = 'chartreuse';
        } else {
            onPage.style.backgroundColor = 'lightcoral';
            let realAnswer = document.createElement('p');
            realAnswer.innerHTML = `Correct Answer: ${question["correct_answer"]}`;
            onPage.insertBefore(realAnswer, ans_in);
        }
    });
    document.querySelector('#final-score').innerHTML = `${correct}/${QS.length} Correct!`;
    document.querySelector('#ans-sub').style.display = 'none';
    document.querySelector('#again').style.display = 'inline';
    return false;
}