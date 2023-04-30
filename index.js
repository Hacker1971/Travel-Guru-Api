const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000;
const data = require("./Data/travel.json")
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! tanvir hi')
})
app.get('/travel', (req, res) => {
  res.send(data)
})
app.get("/travel/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const selectedNews = data.find((n) => parseInt(n.id) === id);
    res.send(selectedNews);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})