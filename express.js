const express = require('express');
const app = express();
const service = require('./person-service');
var bodyParser = require('body-parser');

app.listen(3002, function () {
  console.log('express server listening in 3002');
});
app.use(bodyParser.json());

// Implementation

app.get('/persons', async function (req, res) {
  res.send(await service.list());
});

app.post('/persons', async function (req, res) {
  const person = await service.add(req.body);
  if (person) res.status(201).send(person);
  else res.status(404).send();
});

app.get('/persons/:id', async function (req, res) {
  const person = await service.find(req.params.id);
  if (person) res.send(person);
  else res.status(404).send();
});

app.patch('/persons/:id', async function (req, res) {
  const person = await service.update({ id: req.params.id, ...req.body });
  if (person) res.send(person);
  else res.status(404).send();
});
