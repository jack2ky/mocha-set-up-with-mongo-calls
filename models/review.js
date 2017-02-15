const mongoose = require("mongoose");
//had to include this in model file or would of got deprecated promise waring message
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    question1 : String,
    question2 : String,
    userId : Schema.Types.ObjectId
})

module.exports = mongoose.model("Review",reviewSchema);
