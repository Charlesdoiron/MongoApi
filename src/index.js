const fastify = require('fastify')({
    logger: true
});

const mongoose = require('mongoose');

fastify.get('/', async (request, reply) => {
    return { hello: 'world'}
});




mongoose.connect('mongodb://localhost/apiPreprod')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))
    
  const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    }   catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
};

start();

