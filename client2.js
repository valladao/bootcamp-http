const https = require("https")

const data = JSON.stringify({
  todo: "Buy the milk",
})

const options = {
  hostname: "ptsv2.com",
  port: 443,
  path: "/t/6xfhn-1623115697/post",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
}

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on("data", (d) => {
    process.stdout.write(d)
  })
})

req.on("error", (error) => {
  console.error(error)
})

req.write(data)
req.end()
