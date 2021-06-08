const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.post("/submit-form", (req, res) => {
  const username = req.body.username
  console.log(username)
  res.end()
})

app.listen(8080, () => {})
