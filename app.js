const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

/* Middleware */
app.use(cors()); // Enable All CORS requests
app.use(bodyParser.json()); // Parse application/json

app.post('/', (req, res) => {
  const { url } = req.body;

  axios.get(url)
    .then(response => {
      return res.send(response.data);
    })
    .catch(err => {
      return res.send({ "Error": err.message });
    });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))
