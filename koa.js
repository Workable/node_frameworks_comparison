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
    '/persons/:id': { put, get }
  })
);


// Routes implementation

async function list(ctx) {
  ctx.body = await person.list();
}

async function post(ctx) {
  ctx.body = await person.add(ctx.request.body);
}

async function put(ctx) {
  ctx.body = await person.update({ id: ctx.params.id, ...ctx.request.body });
}

async function get(ctx) {
  ctx.body = await person.find(ctx.params.id);
}
