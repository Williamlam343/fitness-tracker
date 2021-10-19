const router = require("express").Router()
const { ObjectID, ObjectId } = require("bson")
const Exercise = require("../../models")


// retrive from database
router.get("/", async (req, res) => {
    try {
        let exerciseData = await Exercise.aggregate([
            {
                $addFields:
                {
                    totalDuration: {
                        $sum: "$exercises.duration",
                    },
                }
            }
        ])

        res.json(exerciseData)
    } catch (error) {
        res.json(error)
    }

})

// retrive from database
router.get("/range", async (req, res) => {
    try {
        let exerciseData = await Exercise.aggregate([
            {
                $addFields:
                {
                    totalDuration: {
                        $sum: "$exercises.duration",
                    },
                    totalWeight: {

                        $sum: "$exercises.weight"
                    }
                }
            }
        ])

        res.json(exerciseData)
    } catch (error) {
        res.json(error)
    }
})



// creates an exercise
router.post("/", async (req, res) => {
    try {
        res.json(

            await Exercise.create(req.body)

        )

    } catch (error) {

        res.json(error)

    }

})

// adds an exercise
router.put("/:id", async ({ body, params }, res) => {
    console.log(body)
    console.log(params.id)
    try {
        let data = await Exercise.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            {
                new: true
            }
        )
        console.log(data)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

// router.put("/:id", ({ body, params }, res) => {
//     Exercise.findOneAndUpdate(
//         params.id,
//         { $push: { exercises: body } },
//         { new: true, runValidators: true })
//         .then(workout_db => { res.json(workout_db); })
//         .catch(err => { res.json(err); });
// });


// router.put("/:id", async (req, res) => {
//     console.log(req.body)
//     console.log(req.params.id)

//     const filter = { _id: ObjectId(req.params.id) }
//     const update = { $insert: { help: req.body } }
//     let workoutData = await Exercise.findOneAndUpdate(filter, update, { new: true })
//     console.log(workoutData)
// })


module.exports = router;