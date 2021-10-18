const mongoose = require("mongoose")

const Schema = mongoose.Schema


const cardioSchema = new Schema(
    {
        id: {
            type: Number
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

const Cardio = mongoose.model("Cardio", cardioSchema)

module.exports = Cardio;