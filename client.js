const https = require("https")
const options = {
  hostname: "dog.ceo",
  port: 443,
  path: "/api/breeds/list/all",
  method: "GET",
}

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on("data", (d) => {
    process.stdout.write(d)
    //note: we use process.stdout.write() here, and not console.log(), because we are receiving binary data from a stream, in chunks, and we stream each chunk to `stdout`, so the user (you) can see it.
  })
})

req.on("error", (error) => {
  console.error(error)
})

req.end()
