const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/", function(req,res) {
    db.Event.all(function(data) {
        const eventObject = {
            Event: data
        }
        console.log(eventObject);
        res.render("index", eventObject);
    });
});