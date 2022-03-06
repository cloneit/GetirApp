const mongoose =require('mongoose');

const recordSchema = mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        required: true,
        unique: true,
    },
    totalCount: {
        type: Number,
        required: true,
    },

})

var recordModel=mongoose.model('record',recordSchema);
module.exports= recordModel;