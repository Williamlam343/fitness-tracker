const router = require("express").Router()
const { ObjectID } = require("bson")
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

        // let db.exercises.aggregate

        res.json(exerciseData)
    } catch (error) {
        res.json(error)
    }
})




// adds an exercise
router.put("/:id", async (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    try {

        let exerciseData = await Exercise.findByIdAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })

        res.json(exerciseData)

    } catch (error) {

    }
})

// creates an exercise
router.post("/", async (req, res) => {
    // try {

    //     let exerciseData = await Exercise.create(req.body)

    // } catch (error) {

    //     res.json(error)

    // }

})


module.exports = router;