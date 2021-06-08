const express = require("express")
const app = express()

//app.use(express.json())

app.get("/uppercase/:theValue1/:theValue2", (req, res) => {
  res.send(req.params.theValue1.toUpperCase() + " " + req.params.theValue2)
})

app.listen(8080, () => {})
