var mongoose = require('mongoose')
var ObjectId = mongoose.SchemaTypes.ObjectId

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    albumArt: { type: String, required: true },
    artist: { type: String, required: true },
    collection: { type: String, required: true },
    price: { type: String, required: true },
    preview: { type: String, required: true },
    playlistId: { type: ObjectId, required: true }
    // position: {}   //use numerical value to position them above one another.
})

module.exports = mongoose.model('Song', schema)