const mongoose =require('mongoose');

const recordSchema = mongoose.Schema({
    code: {
        type: Number ,
        required: true,
        unique: true,
    },
    msg: {
        type: String,
        required: true,
        unique: true,
    },
    records: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'record',
        required: true,
    }],

})

let recordsModel=mongoose.model('records',recordSchema);
module.exports= recordsModel;