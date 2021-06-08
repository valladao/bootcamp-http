const express = require("express")
const app = express()

app.set("view engine", "pug")

app.get("/about", (req, res) => {
  res.render("about", { getName: () => "Manoel Valladão" })
})

app.listen(8080, () => {})
