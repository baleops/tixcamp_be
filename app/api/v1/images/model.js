const mongoose = require('mongoose');
const {model, Schema} = mongoose;

let imageSchema = Schema(
    {
        urlImages : { type: String },
    },
    { 
        timestamps: true
    },
);

module.exports = model('Image', imageSchema);