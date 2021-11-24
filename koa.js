const Koa = require('koa');
const app = new Koa();

app.listen(3000, function () {
  console.log('koa server listening in 3000');
});

// Routes implementation

// response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });
