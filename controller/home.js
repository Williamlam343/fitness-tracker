const router = require("express").Router()
const path = require("path")
// const Exercise = require("../models")

router.get("/", (req, res) => {
    res.json()
})

router.get("/exercise?id=:id", async (req, res) => {
    console.log(req.params.id)
    res.sendFile(path.join(__dirname, `public/exercise?id=${req.params.id}`))

})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public/exercise"))
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "public/stats"))
})

module.exports = router;