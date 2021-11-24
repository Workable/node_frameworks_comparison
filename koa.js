const Koa = require('koa');
const app = new Koa();
const { router } = require('fast-koa-router');
const person = require('./person-service');
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
  ctx.body = await person.list();
}

async function post(ctx) {
  const p = await person.add(ctx.request.body);
  if (p) {
    ctx.body = p;
    ctx.status = 201;
  }
}

async function patch(ctx) {
  const update = await person.update({ id: ctx.params.id, ...ctx.request.body });
  if (update) ctx.body = update;
}

async function get(ctx) {
  const p = await person.find(ctx.params.id);
  if (p) ctx.body = p;
}
