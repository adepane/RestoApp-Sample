const path = require('path');
const express = require('express');

const PORT = 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

const server = app.listen(PORT, () => {
  console.log('listening on port ', server.address().port);
});
