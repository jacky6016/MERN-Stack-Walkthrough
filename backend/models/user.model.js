// models/user.model.js
const mongoose = require('mongoose');
const Schema= mongoose.Schema;

// define the User schema
const userSchema = new Schema({
	// field validation
	username: {
		type: String,
		require: true,
		unique: true,
		trim: true, // trim white spaces in the end
		minlength: 3
	},
}, {
	timestamps: true
});

// declare and export the model
const User = mongoose.model('User', userSchema);
module.exports = User;