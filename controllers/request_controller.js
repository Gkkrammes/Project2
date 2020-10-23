const express = require("express");
const router = express.Router();

const db = require("../models");


router.get("/api/request", function(req,res) {
    let query = {};
    if (req.query.event_id) {
        query.EventID = req.query.event_id
    }
    db.Request.findAll({
        where: query,
        include: [db.Event]
    }).then(function(dbRequest) {
        res.json(dbRequest);
    });
});

router.get("/api/request/:id", function(req,res) {
    db.Event.findOne({
        where: {
            name: req.params.name
        },
        include: [db.Event]
    }).then(function(dbRequest) {
        res.json(dbRequest);
    });
});

router.post("/api/request", function(req,res) {
    db.Requests.create(req.body).then(function(dbRequest) {
        res.json(dbRequest);
    });
});

router.put("/api/request/:id", function(req, res) {
    db.Event.update(req.body,
        {
            where: {
                id: req.params.id
            }
        }).then(function(dbRequest) {
            if (dbRequest.changedRows == 0) {
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
    }).then(function(dbRequest) {
        if (dbRequest.changedRows == 0) {
            return res.status(404).end();
        } else {
                res.status(200).end();
        }
    });
});

module.exports = router;

