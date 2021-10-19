const mongoose = require("mongoose")

const Schema = mongoose.Schema


const exerciseSchema = new Schema(
    {
        type: {
            type: String
        },
        name: {
            type: String,
            trime: true,
            required: "Enter exercise name"
        },
        weight: {
            type: Number,

        },
        set: {
            type: Number,

        },
        rep: {
            type: Number,

        },
        duration: {
            type: Number,
            required: "Enter a number"
        },
        distance: {
            type: Number
        }
    }
)

const Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports = Exercise;