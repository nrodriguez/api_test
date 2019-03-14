const express = require('express')
const app = express()
const solvePuzzle = require('./puzzleSolver.js')
const port = 3000

app.get('/', (req, res) => {
    switch (req.query.q) {
        case "Name":
            res.send("Nephtali Rodriguez AKA JustNeph");
            break;
        case "Source":
            res.send("http://www.github.com/nrodriguez/api_test")
            break;
        case "Email Address":
            res.send("nephtali.rodriguez.dont.spam@gmail.com")
            break;
        case "Referrer":
            res.send("Hired.com")
            break;
        case "Degree":
            res.send("Bachelors Of Science in Computer Science from Stony Brook University")
            break;
        case "Resume":
            res.send("http://www.ill-email.it")
            break;
        case "Position":
            res.send("Team Lead Software Engineer")
            break;
        case "Puzzle":
            res.send(solvePuzzle(req.query.d))
            break;
        case "Phone":
            res.send("867-5309")
            break;
        case "Status":
            res.send("Yes")
            break;
        case "Years":
            res.send("9")
            break;
        default:
            res.send('OK')
            break;
    }
    
    
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))