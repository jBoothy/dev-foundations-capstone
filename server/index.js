const express = require('express')
const cors = require('cors')
// const path = require('path')

const app = express()

app.use(cors())
// --------------------------------------------------------


let teams = 
    {
        atlanta: "Atlanta Hawks",
        boston: "Boston Celtics",
        brooklyn: "Brooklyn Nets",
        charlotte: "Charlotte Hornets",
        chicago: "Chicago Bulls",
        cleveland: "Cleveland Cavaliers",
        dallas: "Dallas Mavericks",
        denver: "Denver Nuggets",
        detroit: "Detroit Pistons",
        goldenState: "Golden State Warriors",
        houston: "Houston Rockets",
        indiana: "Indiana Pacers",
        clippers: "Los Angeles Clippers",
        lakers: "Los Angeles Lakers",
        memphis: "Memphis Grizzlies",
        miami: "Miami Heat",
        milwaukee: "Milwaukee Bucks",
        minnesota: "Minnesota Timberwolves",
        pelicans: "New Orleans Pelicans",
        knicks: "New York Knicks",
        thunder: "Oklahoma City Thunder",
        orlando: "Orlando Magic",
        philadelphia: "Philadelphia 76ers",
        phoenix: "Phoenix Suns",
        portland: "Portland Trail Blazers",
        sacramento: "Sacramento Kings",
        spurs: "San Antonio Spurs",
        toronto: "Toronto Raptors",
        utah: "Utah Jazz",
        washington: "Washington Wizards"
    }

const values = Object.values(teams)

app.get("/api/teams", (req, res)=>{
    const randomTeam = values[Math.floor(Math.random()*values.length)]
    console.log(randomTeam)
    res.status(200).send(randomTeam)
})




// --------------------------------------------------------
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../landing.html'))
})

const port = process.env.PORT || 5151

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})