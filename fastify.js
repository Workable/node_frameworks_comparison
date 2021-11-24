// CommonJs
const fastify = require('fastify')({
  logger: false
});

// Run the server!
fastify.listen(3001, (err, address) => {
  console.log('fastify server listening in 3001');
  if (err) throw err;
  // Server is now listening on ${address}
});

// implementation

// Declare a route
// fastify.get('/', (request, reply) => {
//     reply.send({ hello: 'world' });
//   });
