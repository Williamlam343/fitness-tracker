const router = require("express").Router()
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
    let data = await Exercise.create({})
    res.json(data)

})

// adds an exercise
router.put("/:id", async ({ body, params }, res) => {
    console.log(body)
    console.log(params.id)
    try {
        let data = await Exercise.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true, runValidators: true })
        res.json(data)

    } catch (error) {
        console.log(error)
        res.json(error)
    }
})



module.exports = router;