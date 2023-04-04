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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify = require('fastify');
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const app = fastify();
(() => __awaiter(void 0, void 0, void 0, function* () {
    // set up swagger
    yield app.register(swagger_1.default, {});
    yield app.register(swagger_ui_1.default, {
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
                },],
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
    app.register(require('./routes/hotels'));
    yield app.ready();
    app.swagger();
    app.listen(3000, () => console.log('Here , listinng'));
}))();
