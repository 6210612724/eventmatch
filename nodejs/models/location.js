// Mongoose
const mongoose = require("mongoose");

const locationchema = new mongoose.Schema ({
    locationId: {type : Number},
    locationName: { type: String,},
    lon: { type: Number,},
    lat : { type: Number,},

})

var data = mongoose.model("location", locationchema)

module.exports = data
;

// module.exports = mongoose.model("User", userSchema)
//mongoose.model("<Collection name", <Schema>)