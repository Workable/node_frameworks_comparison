const express = require('express');
const app = express();
const person = require('./person-service');
var bodyParser = require('body-parser');

app.listen(3002, function () {
  console.log('express server listening in 3002');
});
app.use(bodyParser.json());

// Implementation

app.get('/persons', async function (req, res) {
  res.send(await person.list());
});

app.post('/persons', async function (req, res) {
  const p = await person.add(req.body);
  if (p) res.send(p);
  else res.status(404).send();
});

app.get('/persons/:id', async function (req, res) {
  const p = await person.find(req.params.id);
  if (p) res.send(p);
  else res.status(404).send();
});

app.patch('/persons/:id', async function (req, res) {
    const p = await person.update({ id: req.params.id, ...req.body });
    if (p) res.send(p);
    else res.status(404).send();
  });
