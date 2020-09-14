const express = require("express")

const { get,insert,update,remove,getProjectActions } = require("../data/helpers/projectModel")

const router = express.Router();

router.get("/", (req,res) => {
    get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err)
    })
})

router.post("/", (req,res) => {
    console.log(req.body)
    insert(req.body)
    .then(res.status(200).json(req.body))
    .catch(err => {
        console.log(err)
    })
})

router.put("/:id", (req,res) => {
    update(Number(req.params.id), req.body)
    .then(res.status(200).json(req.body))
    .catch(err => {
        console.log(err)
    })
})

router.delete("/:id", (req,res) => {
    remove(Number(req.params.id))
    .then(res.status(200).json({message: "Project deleted"}))
    .catch(err => {
        console.log(err)
    })
})

router.get("/:id/actions", (req,res) => {
    getProjectActions(Number(req.params.id))
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router; 