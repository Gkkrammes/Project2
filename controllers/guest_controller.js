const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/guest", function(req,res) {
    let query = {};
    if (req.query.event_id) {
        query.EventID = req.query.event_id
    }
    db.Guest.findAll({
        where: query,
        include: [db.Event]
    }).then(function(dbGuest) {
        res.json(dbGuest);
    });
});

router.get("/api/guest/:id", function(req,res) {
    db.Event.findOne({
        where: {
            name: req.params.name
        },
        include: [db.Event]
    }).then(function(dbGuest) {
        res.json(dbGuest);
    });
});

router.post("/api/guest", function(req,res) {
    db.Event.create(req.body).then(function(dbGuest) {
        res.json(dbGuest);
    });
});

router.put("/api/guest/:id", function(req, res) {
    db.Event.update(req.body,
        {
            where: {
                id: req.params.id
            }
        }).then(function(dbGuest) {
            if (dbGuest.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
    });
});

router.delete("/api/events/:id", function(req,res) {
    db.Event.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbGuest) {
        if (dbGuest.changedRows == 0) {
            return res.status(404).end();
        } else {
                res.status(200).end();
        }
    });
});

module.exports = router;
