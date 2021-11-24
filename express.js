const express = require('express');
const app = express();

app.listen(3002, function () {
  console.log('express server listening in 3002');
});

// Implementation

// app.get('/', function (req, res) {
//     res.send('Hello World')
//   })
