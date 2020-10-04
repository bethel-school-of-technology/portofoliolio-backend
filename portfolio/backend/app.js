const express = require('express');
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/:input', function(req, res) {
  console.log(req.params.input);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})