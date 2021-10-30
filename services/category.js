const encrypt = require("../permit/crypto.js");
const auth = require("../permit/auth");

const create = async (body, context) => {
    const log = context.logger.start("services:category:create");
    let categoryModel = {}
    categoryModel.name = body.name
    const catRes = await new db.category(categoryModel).save();
    catRes.save();
    log.end();
    return catRes;
};

//showcategories
const category = async (model, context) => {
    const log = context.logger.start(`services:category:category`);
    let allCategories = await db.category.find({ parent_id: '0' });
    //allCategories.count = await db.category.find().count();
    log.end();
    return allCategories;
};

const createSubCategory = async (body, context) => {
    const log = context.logger.start("services:category:createSubCategory");
    const checkCategory = await db.category.findOne({ _id: { $eq: body.parent_id } });
    if (!checkCategory) {
        log.end();
        throw new Error("Category not found");
    }
    let subcatModel = {}
    subcatModel.name = body.name
    subcatModel.parent_id = body.parent_id
    const subcatRes = await new db.category(subcatModel).save();
    subcatRes.save();
    log.end();
    return subcatRes;
};
const showsubcategory = async (id, context) => {
    const log = context.logger.start(`services:category:showsubcategory`);
    if (!id) {
        throw new Error("category id is required");
    }
    let category = await db.category.find({ parent_id: { $eq: id } });
    if (!category) {
        throw new Error("category not found");
    }
    log.end();
    return category;
};

const symptomsbuild = async (model, context) => {
    const { user_id,subcatId,symptoms } = model;
    const log = context.logger.start(`services:orders:build${model}`);
    let r = Math.floor(Math.random() * 10000000000) + 1;
    let symModel = {
        user: user_id,
        subcatId: subcatId,
        symptoms: symptoms,
        createdOn: new Date(),
        updatedOn: new Date()
    }
    const order = await new db.symptoms(symModel).save();
    log.end();
    return order;
};

const symptom = async (model, context) => {
    const log = context.logger.start(`services:category:symptoms${model}`);
    let user = await db.user.find({ id: { $eq: model.user_id } });
    if (!user) {
        throw new Error("user not found");
    } else {
    const symptom = await symptomsbuild(model, context);
    log.end();
    return symptom;
    }
    
};

const getsymptoms = async (id, context) => {
    const log = context.logger.start(`services:category:getsymptom${id}`);
    let user = await db.user.find({ id: { $eq: id } });
    if (!user) {
        throw new Error("user not found");
    } else {
    let symptoms = await db.symptoms.find({user: id});
    log.end();
    return symptoms;
    }
};

// const dailylog = async (model, context) => {
//     const log = context.logger.start(`services:category:symptoms${model}`);
//     let user = await db.user.find({ id: { $eq: model.user_id } });
//     if (!user) {
//         throw new Error("user not found");
//     } else {
//     const symptom = await symptomsbuild(model, context);
//     log.end();
//     return symptom;
//     }
    
// };


exports.create = create;
exports.category = category;
exports.symptom = symptom;
exports.getsymptoms = getsymptoms;
// exports.dailylog = dailylog;
exports.showsubcategory = showsubcategory;
exports.createSubCategory = createSubCategory;