const express = require('express')
const server = express();

server.all("/", (req, res) => {
  res.send('Uptime Loading')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Rpc is ready.")
  })
}
module.exports = keepAlive
