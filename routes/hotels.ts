const { getAll, getOne, patch, post, deleteOne } = require("../controllers/hotels.ts")

// Hotel schema
const Hotel = {
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      location: {type: 'string'}
    },
  }
  
  // Options for get all hotels
  const getHotelsOpts = {
    schema: {
      descripttion: 'Get all hotels',
      tags: ['hotel'],
      query: {
        type: 'object',
        properties: {
          search_term: {
            type: 'string',
            description: 'Search for hotels by a search-term'
          }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: Hotel
            }
          },
        },
        404: {
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        }
      },
    },
    handler: getAll,
  }
  
  const getHotelOpts = {
    schema: {
      descripttion: 'Get hotel using hotel-id',
      tags: ['hotel'],
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            description: 'hotel id'
          }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            data: Hotel
          },
        },
        404: {
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        }
      },
    },
    handler: getOne,
  }
  
  const postHotelOpts = {
    schema: {
      descripttion: 'Add new hotel',
      tags: ['hotel'],
      body: {
        type: 'object',
        required: ['name', 'location'],
        properties: {
          name: { type: 'string' },
          location: { type: 'string' },
        },
      },
      response: {
        201: {
            type: 'object',
            properties: {
                data:{type: 'string'}
            }
        },
      },
    },
    handler: post,
  }
  
  const deleteHotelOpts = {
    schema: {
      descripttion: 'Delete hotel by id',
      tags: ['hotel'],
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            description: 'hotel id'
          }
        }
      },
      response: {
        200: {
            type: 'object',
            properties: {
                data:{type: 'string'}
            }
        },
        500:  {
          type: 'object',
          properties: {
              message:{type: 'string'}
          }
      }
      },
    },
    handler: deleteOne,
  }
  
  const updateHotelOpts = {
    schema: {
      descripttion: 'Update hotel details by id',
      tags: ['hotel'],
      body: {
        type: 'object',
        properties: {
          name: {type: 'string'},
          location: {type: 'string'}
        }
      },
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            description: 'hotel id'
          }
        }
      },
      response: {
        200: {
            type: 'object',
            properties: {
                data:{type: 'string'}
            }
        },
        500 : {
          type: 'object',
          properties: {
              message:{type: 'string'}
          }
      }
      },
    },
    handler: patch,
  }

function hotelRoutes(fastify: {get: any, post: any, delete: any, patch: any}, options: any, done: any) {
    // Get all hotels
    fastify.get('/hotels', getHotelsOpts)
  
    // Get single hotel
    fastify.get('/hotels/:id', getHotelOpts)
  
    // Add hotel
    fastify.post('/hotels', postHotelOpts)
  
    // Delete hotel
    fastify.delete('/hotels/:id', deleteHotelOpts)
  
    // Update hotel
    fastify.patch('/hotels/:id', updateHotelOpts)
  
    done()
  }
  
  module.exports = hotelRoutes