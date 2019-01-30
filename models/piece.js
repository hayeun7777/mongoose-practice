// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Creator Schema
const creatorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true    
    },
    image: {
        type: String,
        default: 'http://placekitten.com/200/300'
    },
     birthYear: {
        type: Date,
        required: true
    },
    deathYear: {
        type: Date
    }
    });
// TODO: Create Piece Schema
// HINT: include a creator field for using the Creator schema
const pieceSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true,
		minLength: 2,
		maxLength: 100
	},
	image:{
		type:String,
		default: 'http://placekitten.com/200/300'
	},
	 creator: [creatorSchema]
})

// TODO: Use Piece schema to create Piece model
// TODO: Export Piece Model
module.exports = mongoose.model('Piece', pieceSchema);
// NOTE: You don't need to worry about Creator schema. You don't need to
// create a model for it or export it. This is because it lives inside
// the Piece model, so that takes care of it all! Yay for embedded schemas!
