const connectToMongo = require('./db')
const express = require('express');
const { application } = require('express');


connectToMongo();
const app = express()
const port = 3000


// Available Routes
application.


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})