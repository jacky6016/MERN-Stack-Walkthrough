// models/exercise.model.js
const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const userSchema = new Schema({
	username: { type: String, required: true },
	description: { type: String, required: true },
	duration: { type: Number, required: true },
	date: { type: Date, required: true },
}, {
	timestamps: true
});

// declare and export the model
const Exercise = mongoose.model('User', userSchema);
module.exports = Exercise;