const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/", function(req,res) {
    db.Event.findAll({}).then(function(data) {
        
        res.render("index", data);
    });
});

router.get("/create", function(req,res) {
    db.Event.findAll({}).then(function(data) { 
        res.render("partials/create", data);
    });
});

router.get("/rsvp", function(req,res) {
    db.Event.findAll({}).then(function(data) { 
        res.render("partials/rsvp", data);
    });
});

router.get("/finalize", function(req,res) {
    db.Event.findAll({}).then(function(data) { 
        res.render("partials/finalize", data);
    });
});

router.get("/claim", function(req,res) {
    db.Event.findAll({}).then(function(data) { 
        res.render("partials/claim", data);
    });
});

router.get("/:name", function(req,res) {
    db.Event.findOne({
        where: {
            name: req.params.name
        }
    }).then(function(data) {
        console.log(data);
        res.json(data);
    });
});

router.post("/api/event", function(req,res) {
    db.Event.create(req.body).then(function(dbEvent) {
        res.json(dbEvent);
    });
});

router.put("/api/event/:id", function(req, res) {
    db.Event.update(req.body,
        {
            where: {
                id: req.params.id
            }
        }).then(function(result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

router.delete("/api/event/:id", function(req,res) {
    db.Event.destroy(req.body,
        {
            where: {
                id: req.params.id
            }
        }).then(function(result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

module.exports = router;

