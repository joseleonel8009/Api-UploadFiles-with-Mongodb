const { Schema, model } = require('mongoose');

const fileSchema = new Schema({
    name: { type: String }
});

module.exports = model('File', fileSchema);