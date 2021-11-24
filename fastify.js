// CommonJs
const fastify = require('fastify')({
    logger: false
});

const service = require('./person-service');
const resource = 'persons';

// Get
fastify.get(`/${resource}/:id`, async (request, reply) => {
    const person = await service.find(request.params.id);
    if(person){ 
        return person;
    } 
    reply.code(404).send();
});

// List
fastify.get(`/${resource}`, () => {
    return service.list();
});

// Create
fastify.post(`/${resource}`, async (request, reply) => {
    const person = await service.add(request.body);
    reply.code(201).send(person);
});

//Update
fastify.patch(`/${resource}/:id`, async (request, reply) => {
    const person = await service.find(request.params.id);
    if (!person) {
        reply.code(404).send();
        return;
    }
   return service.update({ id: request.params.id, ...request.body });
});


// Run the server!
fastify.listen(3001, (err, address) => {
    console.log('fastify server listening in 3001');
    if (err) throw err;
    // Server is now listening on ${address}
});
