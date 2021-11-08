

//Compliment Button
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};

//Fortune Button
document.querySelector("#fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};

//Get a cute pic button
const picButton = document.querySelector('#cutePic')
picButton.addEventListener('click', async function () {
    const res = await axios.get("http://localhost:4000/api/pictures")
    let newImg = document.createElement('IMG')
    newImg.src = res.data
    document.body.append(newImg)
})

//Bad dad jokes
document.querySelector("#jokeButton").onclick = function () {
    axios.get("http://localhost:4000/api/dadjokes/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};



//Goal board
const goalBoard = document.querySelector('#goalBoard')
const goalsList = document.querySelector('#myGoals')
const goalSubmit = document.querySelector('submit')

//Get list of goals and append to html
axios.get("http://localhost:4000/api/goals")
    .then(function (res) {
        for (let i = 0; i < res.data.length; i++) {
            let newGoals = document.createElement('li');
            newGoals.textContent = res.data[i].goal
            goalsList.append(newGoals)
        }
    })

//create new goal
//This code is pretty janky and I would refactor it if I had more time.

goalBoard.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = document.querySelector('#goalName').value
    const body = {
        goal: formData
    };

    axios.post("http://localhost:4000/api/goals", body)
        .then(res => {
            let newGoal = res.data[res.data.length - 1]
            let newItem = document.createElement('li')
            newItem.textContent = newGoal.goal
            goalsList.append(newItem)

        })
})


//delete a goal


