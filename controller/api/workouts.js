const router = require("express").Router()
const Exercise = require("../../models")


// retrive from database
router.get("/", async (req, res) => {
    try {
        let exerciseData = await Exercise.find({})

        res.json(exerciseData)
    } catch (error) {
        res.json(error)
    }

})

// adds an exercise
router.put("/:id", async (req, res) => {
    console.log(req.body)

    try {

        let exerciseData = await Exercise.updateOne({ uid: "616dfa5ccd583723dc66d9f5" }, { $push: { exercises: req.body } })

        res.json(exerciseData)

    } catch (error) {

    }
})

// creates an exercise
router.post("/", (req, res) => { })

// retrive from database
router.get("/range", async (req, res) => {
    try {
        let exerciseData = await Exercise.find({})

        res.json(exerciseData)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;