"use strict";
const mongoose = require("mongoose");
const activities = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },      
     activities: [
        { 
            column: { 
                type: String,
                enum: ["yes", "no"],
                required: false 
            },
        },
    ],  
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
});
mongoose.model("activities", activities);
module.exports = activities;