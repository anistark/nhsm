var Mongoose = require('../../database').Mongoose;

//create the schema
var contactsSchema = new Mongoose.Schema({
	name: { type: String },
    email: { type: String, required: true },
    content: { type: String, required: true },
    creationDate: { type: Date, required: true, default: Date.now },
});

//create the model
var Contacts = Mongoose.model('Contacts', contactsSchema, 'Contacts');

exports.Contacts = Contacts;