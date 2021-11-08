const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);

});

//Get a fortune

app.get("/api/fortune", (req, res) => {
  const fortunes = ["If you wish to see the best in others, show the best of yourself.",
    "Resting well is as important as working hard.",
    "There’s no such thing as an ordinary cat.",
    "Physical activity will dramatically improve your outlook today.",
    "Courtesy is contagious."
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);

});


//Cute pic

app.get("/api/pictures", (req, res) => {
  let picture = 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'

  res.status(200).send(picture)
})


//Dad Jokes
app.get("/api/dadjokes", (req, res) => {
  const jokes = ["A weasel walks into a bar and the bartender says “Wow I’ve never served a weasel before. What can I get ya?” “Pop,” goes the weasel.",
    "My wife said I should do lunges to stay in shape. That would be a big step forward.",
    "What music genre are nation anthems? Country",
    "What's the best thing about Switzerland? I don't know, but the flag is a big plus.",
    "I don't trust those trees. They seem kind of shady.."
  ];

  let randomIndex = Math.floor(Math.random() * jokes.length);
  let randomDadJoke = jokes[randomIndex];

  res.status(200).send(randomDadJoke);

});

//Goalboard

const goals = [
  {
    "goal": "Deadlift 600 pounds"
  },
  {
    "goal": "Become a software developer"
  }
]

//Show current list of goals in HTML
app.get("/api/goals", (req, res) => {
  res.status(200).send(goals)
})

//Create new goal
app.post("/api/goals", (req, res) => {
  goals.push(req.body)
  console.log(goals)
  res.status(200).send(goals)
})

//Delete a goal


app.listen(4000, () => console.log("Server running on 4000"));
