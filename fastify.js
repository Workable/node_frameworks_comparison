// CommonJs
const fastify = require('fastify')({
    logger: false
});

const service = require('./person-service');
const resource = 'persons';

// Get
fastify.get(`/${resource}/:id`, async (request, reply) => {
    const person = await service.find(request.params.id);
    person ? reply.send(person) : reply.code(404).send();
});

// List
fastify.get(`/${resource}`, async (request, reply) => {
    const persons = await service.list();
    reply.send(persons);
});

// Create
fastify.post(`/${resource}`, async (request, reply) => {
    const person = await service.add(request.body);
    reply.code(201);
    reply.send(person);
});

//Update
fastify.patch(`/${resource}/:id`, async (request, reply) => {
    const person = await service.find(request.params.id);
    if (!person) {
        reply.code(404).send();
        return;
    }
    const updated = await service.update({ id: request.params.id, ...request.body });
    reply.send(updated);
});


// Run the server!
fastify.listen(3001, (err, address) => {
    console.log('fastify server listening in 3001');
    if (err) throw err;
    // Server is now listening on ${address}
});
