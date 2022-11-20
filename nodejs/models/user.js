// Mongoose
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    username: { type: String,},
    password: { type: String,},
    email : { type: String,},
})

var data = mongoose.model("user", userSchema)

module.exports = data
;

// module.exports = mongoose.model("User", userSchema)
//mongoose.model("<Collection name", <Schema>)