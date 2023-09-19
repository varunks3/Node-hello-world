const port = 8080;
const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World! from backend')
  })
  app.get('/moto', (req, res) => {
    res.send('Hello moto! from backend')
  })

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
