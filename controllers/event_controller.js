const express = require("express");
const router = express.Router();

const db = require("../models");

module.exports = function(router) {
    router.get("/", function(req,res) {
        db.Event.findAll({}).then(function(data) {
            const eventObject = {
                Event: data
            }
            console.log(eventObject);
            res.render("index", eventObject);
        });
    });
    
    router.get("/:name", function(req,res) {
        db.Event.findOne({
            where: {
                name: req.params.name
            }
        }, function(data) {
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
            }, function(result) {
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
            }, function(result) {
                if (result.changedRows == 0) {
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            });
    });
};

