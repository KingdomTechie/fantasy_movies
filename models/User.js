const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (
    {
        email: {type: String, required: [true, "Please profide an email address"], uique: true},
        password: {type: String, required: [true, "Please provide a Password"], unique: true},
        username: {type: String, required: true, unique: true}
    }, 
    {
    timestamps: true
    }
);

const User = mongoose.model("User", userSchema)

module.exports = User;