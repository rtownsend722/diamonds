const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static(__dirname + '/dist'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});