const Koa = require('koa');
const app = new Koa();
const { router } = require('fast-koa-router');
const service = require('./person-service');
var bodyParser = require('koa-bodyparser');

app.listen(3000, function () {
  console.log('koa server listening in 3000');
});
app.use(bodyParser());

app.use(
  router({
    '/persons': { get: list, post },
    '/persons/:id': { patch, get }
  })
);

// Routes implementation

async function list(ctx) {
  ctx.body = await service.list();
}

async function post(ctx) {
  const person = await service.add(ctx.request.body);
  if (person) {
    ctx.body = person;
    ctx.status = 201;
  }
}

async function patch(ctx) {
  const person = await service.update({ id: ctx.params.id, ...ctx.request.body });
  if (person) ctx.body = person;
}

async function get(ctx) {
  const person = await service.find(ctx.params.id);
  if (person) ctx.body = person;
}
