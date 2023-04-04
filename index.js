"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fastify = require('fastify')();
(() => __awaiter(void 0, void 0, void 0, function* () {
    // set up swagger
    yield fastify.register(require('@fastify/swagger'), {});
    yield fastify.register(require('@fastify/swagger-ui'), {
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
                },],
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
            docExpansion: 'none',
            deepLinking: true
        },
        uiHooks: {
            onRequest: function (request, reply, next) {
                next();
            },
            preHandler: function (request, reply, next) {
                next();
            }
        },
        staticCSP: false,
        transformStaticCSP: (header) => header,
        exposeRoute: true
    });
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
        handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
            return 'json_hotels';
        })
    });
    yield fastify.ready();
    fastify.swagger();
    fastify.listen(3000, () => console.log('Here , listinng'));
}))();
