const encrypt = require("../permit/crypto.js");
const auth = require("../permit/auth");


const activitybuild = async (model, context) => {
    const { user_id, activities } = model;
    const log = context.logger.start(`services:orders:build${model}`);
    let r = Math.floor(Math.random() * 10000000000) + 1;
    let actModel = {
        user: user_id,
        activities: activities,
        createdOn: new Date(),
        updatedOn: new Date()
    }
    const order = await new db.activities(actModel).save();
    log.end();
    return order;
};
const activity = async (model, context) => {
    const log = context.logger.start(`services:activities:activity${model}`);
    let user = await db.user.find({ id: { $eq: model.user_id } });
    if (!user) {
        throw new Error("user not found");
    } else {
    const active = await activitybuild(model, context);
    log.end();
    return active;
    }
    
};
exports.activity = activity;
exports.activitybuild = activitybuild;