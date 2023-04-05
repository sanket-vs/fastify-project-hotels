const fastify = require('fastify')
const swagger = require('@fastify/swagger')
const swagger_ui = require('@fastify/swagger-ui')

const app = fastify();


(async () => {
  // set up swagger
  await app.register(swagger, {});

  await app.register(swagger_ui, {
        routePrefix: '/docs',
        swagger: {
            info: {
                title: 'Fastify App Documentation',
                description: 'Fastify Hotels App Documentation description',
                version: '0.1.0',
            },
            host: '127.0.0.1:3000',
            basePath: '',
            schemes: ['http', 'https'],
            consumes: ['application/json'],
            produces: ['application/json'],
            tags: [{
                name: 'Hotel',
                description: 'Hotel\'s API'
            }, ],
        },
        uiConfig: {
            docExpansion: 'none', // expand/not all the documentations none|list|full
            deepLinking: true
        },
        uiHooks: {
            onRequest: function(request, reply, next) {
                next()
            },
            preHandler: function(request, reply, next) {
                next()
            }
        },
        staticCSP: false,
        transformStaticCSP: (header) => header,
        exposeRoute: true
    })
  
  //Register your routes
  app.register(require('./routes/hotels'))

  await app.ready()
  app.swagger()

  app.listen(3000, ()=> console.log('Here , listinng'))
})();