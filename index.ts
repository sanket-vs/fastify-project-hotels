const fastify = require('fastify')
import swagger from '@fastify/swagger'
import swagger_ui from '@fastify/swagger-ui'

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
    

  // define all your routes

  // fastify.get('/',{
  //   // url: '/',
  //   // method: ['GET'],
  //   // request and response schema
  //   schema: {
  //     summary: 'Returns all Hotels',
  //     description: 'Returns all the hotels\'s data',
  //     tags: ['hotels'],
  //     response: {
  //       200: {
  //         description: 'Returns all the hotels',
  //         type: 'array',
  //         items: {
  //           type: 'object',
  //           properties: {
  //             id: {
  //               type: 'number',
  //               format: 'uuid'
  //             },
  //             name: {
  //               type: 'string'
  //             },
  //             location: {
  //               type: 'string'
  //             }
  //           }
  //         }
  //       },
  //       404: {
  //         description: 'Hotel not found',
  //         type: 'object',
  //         properties: {
  //           code: {
  //             type: 'string'
  //           },
  //           message: {
  //             type: 'string'
  //           }
  //         }
  //       }
  //     }
  //   },
   
  //   // the function that will handle this request
  //   handler: async (request, reply) => {
  //     return 'json_hotels'
  //   }
  // })

  app.register(require('./routes/hotels'))

  await app.ready()
  app.swagger()

  app.listen(3000, ()=> console.log('Here , listinng'))
})();