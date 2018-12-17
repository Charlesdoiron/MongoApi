const boom = require('boom');

const Car = require('../models/Car')

exports.getCars = async (req, reply) => {
    try {
        const id = req.params.id;
        const car = await Car.findById(id);
        return car
    }
    catch (err) {
        throw boom.boomify(err)
    }
}