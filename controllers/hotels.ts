const { Hotel } = require('../models/hotel')

const setHotelBody = (body) => {
    const model = {}
    body.name && (model.name = body.name)
    body.location && (model.location = body.location)

    return model
}


const getAll = async (req, reply) => {
    try {
        const hotelsList = await Hotel.findAll({ raw: true })
        console.log('hotelsController: getAll::result', hotelsList)
        if(!hotelsList.length){
            return reply.code(404).send({ data: "There are no hotels" })
        }
        reply.code(200).send({ data: hotelsList })
    } catch (error) {
        console.log('hotelsController: getAll::', error.message)
        reply.code(500).send({ message: error.message })
    }
}

const getOne = async (req, reply) => {
    try {
        const { params: { id } } = req
        const hotel = await Hotel.findOne({ where: { id }, raw: true })
        console.log('hotel ::', hotel)
        if(!hotel) {
            return reply.code(200).send({ data: "Resource doesnt exist" })
        }
        reply.code(200).send({ data: hotel })
    } catch (error) {
        console.log('hotelsController: getOne::', error.message)
        reply.code(500).send({ message: error.message })
    }

}

const post = async (req, reply) => {
    try {
        const { body } = req

        const postBody = setHotelBody(body)

        await Hotel.create(postBody)
        reply.code(201).send({ data: "Resource created!" })
    } catch (error) {
        console.log('hotelsController: post::', error.message)
        reply.code(500).send({ message: error.message })
    }

}

const patch = async (req, reply) => {
    try {
        const { params: { id }, body } = req

        const patchBody = setHotelBody(body)
        const result = await Hotel.update({ ...patchBody }, { where: { id } })

        if (result[0] === 0) {
            throw Error("There is nothing to update!");
        }

        reply.send({ data: "Record updated Successfully!" })      //Not able to use .code() here, fastify issue
    } catch (error) {
        console.log('hotelsController: patch::', error.message)
        reply.code(500).send({ message: error.message })
    }
}

const deleteOne = async (req, reply) => {
    try {
        const { params: { id } } = req

        const result = await Hotel.destroy({ where: { id } })

        if (result[0] === 0) {
            throw Error("The resource doesnt exist!");
        }
        console.log('HERe', result)
        reply.send({ data: "Record deleted Successfully!" })
    } catch (error) {
        console.log(error.message)
        reply.code(500).send({ message: error.message })
    }
}

module.exports = {
    getAll,
    getOne,
    post,
    patch,
    deleteOne,
}


