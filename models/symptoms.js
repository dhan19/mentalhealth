"use strict";
const mongoose = require("mongoose");
const symptoms = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },
    // parent_id: { 
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"user"
    //  },
     symptoms: [
        {
            subcatId: { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'category',
                //required: false 
            },
            score: {
                type: String, default: "1",
                enum: ["1", "2", "3","4"]
            },
        },
    ],
    // score: {
    //     type: String, default: "",
    //     enum: ["1", "2", "3","4"]
    // },
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
});
mongoose.model("symptoms", symptoms);
module.exports = symptoms;