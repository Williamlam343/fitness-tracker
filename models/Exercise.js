const mongoose = require("mongoose")

const Schema = mongoose.Schema


const exerciseSchema = new Schema(
    {
        id: {
            type: Number
        },
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
            required: "Enter a number"
        },
        set: {
            type: Number,
            required: "Enter a number"
        },
        rep: {
            type: Number,
            required: "Enter a number"
        },
        duration: {
            type: Number,
            required: "Enter a number"
        }
    }
)

const Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports = Exercise;