const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// "geometry": {
//     "type": "Point",
//     "coordinates": [125.6, 10.1]
//   }

//Create a geo location Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

//create Ninja Schema
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    nationality: {
        type: String
    },
    relationship: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

//create Ninja model
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;