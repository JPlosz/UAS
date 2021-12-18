const express = require("express")
const app = express()

// let rqst = 0;
// app.use(() => {
//     rqst++;
//     console.log("=>HTML REQUEST " + rqst + "<=")
// })
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render("home.ejs")
})

let port = 50505;
app.listen(port, () => {
    console.log("***Open Express Server on Port " + port + "***")
})