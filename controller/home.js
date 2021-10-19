const router = require("express").Router()
const path = require("path")

router.get("/", (req, res) => {
    res.json("hello")
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public/exercise"))
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "public/stats"))
})

module.exports = router;