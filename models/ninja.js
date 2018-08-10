const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
    //add in geo location
});

//create Ninja model
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;