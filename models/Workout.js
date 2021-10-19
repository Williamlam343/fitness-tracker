const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String
    },
    exercise: [
        {
            type: Schema.Types.ObjectId,
            ref: "Workout"
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
