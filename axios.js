const axios = require("axios")

axios
  .post("https://ptsv2.com/t/6xfhn-1623115697/post", {
    todo: "Buy the milk2",
  })
  .then((res) => {
    console.log(`statusCode: ${res.status}`)
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error.message)
  })
