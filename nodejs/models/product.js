// Mongoose
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    productId: { type: String,},
    productName: { type: String,},
    productPrice : { type: Number,},

})

var data = mongoose.model("User", userSchema)

module.exports = data
;

// module.exports = mongoose.model("User", userSchema)
//mongoose.model("<Collection name", <Schema>)