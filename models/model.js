const mongoose = require('mongoose');

const TestusersSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    Age: { type: Number, required: true },
    phoneNumber: { type: Number, required: true, unique: true }
}, { timestamps: true });

const Testusers = mongoose.model("Testusers", TestusersSchema);

module.exports = { Testusers };
