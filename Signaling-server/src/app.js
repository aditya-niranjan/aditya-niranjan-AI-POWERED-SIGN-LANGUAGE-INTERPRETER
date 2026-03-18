const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send("yes server is running and response is coming from the server");
});


module.exports = app;