// const Joi = require("joi");

// module.exports.listingSchema = Joi.object({
//     title: Joi.string().required(),
//     description: Joi.string().required(),
//     location: Joi.string().required(),
//     country: Joi.string().required(),
//     price: Joi.number().required().min(0),
//     image: Joi.string().allow("", null),
// });

function sanitizeInput(input) {
    for (let key in input.listing) {
        if (typeof input.listing[key] === 'string') {
            input.listing[key] = input.listing[key].replace(/^"(.*)"$/, '$1'); // Remove extra quotes
        }
    }
    return input;
}

const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null),
    }).required(),
});

