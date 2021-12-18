const express = require("express")
const app = express()

let rqst = 0;
app.use(() => {
    rqst++;
    console.log("=>HTML REQUEST " + rqst + "<=")
})



let port = 50505;
app.listen(port, () => {
    console.log("***Open Express Server on Port " + port + "***")
})