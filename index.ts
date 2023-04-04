const fastify = require('fastify')();

(async () => {
  // set up swagger
  await fastify.register(require('@fastify/swagger'), {});

  await fastify.register(require('@fastify/swagger-ui'), {
        routePrefix: '/docs',
        swagger: {
            info: {
                title: 'My FirstAPP Documentation',
                description: 'My FirstApp Backend Documentation description',
                version: '0.1.0',
                termsOfService: 'https://mywebsite.io/tos',
                contact: {
                    name: 'John Doe',
                    url: 'https://www.johndoe.com',
                    email: 'john.doe@email.com'
                }
            },
            externalDocs: {
                url: 'https://www.johndoe.com/api/',
                description: 'Find more info here'
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
            definitions: {
                Hotel: {
                    type: 'object',
                    required: ['id', 'name', 'location'],
                    properties: {
                        id: {
                            type: 'number',
                            format: 'uuid'
                        },
                        name: {
                            type: 'string'
                        },
                        location: {
                            type: 'string'
                        }
                    }
                },
            }
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
    

  // define all your routes

  fastify.route({
    url: '/',
    method: ['GET'],
    // request and response schema
    schema: {
      summary: 'Returns all Hotels',
      description: 'Returns all the hotels\'s data',
      tags: ['hotels'],
      response: {
        200: {
          description: 'Returns all the hotels',
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'number',
                format: 'uuid'
              },
              name: {
                type: 'string'
              },
              location: {
                type: 'string'
              }
            }
          }
        },
        404: {
          description: 'Hotel not found',
          type: 'object',
          properties: {
            code: {
              type: 'string'
            },
            message: {
              type: 'string'
            }
          }
        }
      }
    },
   
    // the function that will handle this request
    handler: async (request, reply) => {
      return 'json_hotels'
    }
  })

  await fastify.ready()
  fastify.swagger()

  fastify.listen(3000, ()=> console.log('Here , listinng'))
})();