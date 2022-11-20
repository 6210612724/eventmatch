// Mongoose
const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema ({
    activityName: { type: String,},
    lon: { type: Number,},
    lat : { type: Number,},
    activityDesc : { type:String },

})

var data = mongoose.model("activity", activitySchema)

module.exports = data
;

// module.exports = mongoose.model("User", userSchema)
//mongoose.model("<Collection name", <Schema>)