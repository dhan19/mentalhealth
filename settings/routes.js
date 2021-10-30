"use strict";

const fs = require("fs");
const api = require("../api");
const specs = require("../specs");
const permit = require("../permit")
const validator = require("../validators");

const configure = (app, logger) => {
    const log = logger.start("settings:routes:configure");
    app.get("/specs", function (req, res) {
        fs.readFile("./public/specs.html", function (err, data) {
            if (err) {
                return res.json({
                    isSuccess: false,
                    error: err.toString()
                });
            }
            res.contentType("text/html");
            res.send(data);
        });
    });


    app.get("/api/specs", function (req, res) {
        res.contentType("application/json");
        res.send(specs.get());
    });

    //user api's //
    app.post(
        "/api/users/create",
        permit.context.builder,
        validator.users.create,
        api.users.create
    );

    app.post(
        "/api/users/login",
        permit.context.builder,
        validator.users.login,
        api.users.login
    );

    app.get(
        "/api/users/currentUser/:id",
        permit.context.validateToken,
        api.users.currentUser
    );

    app.get(
        "/api/users/getById/:id",
        permit.context.builder,
        api.users.getById
    );

    app.put(
        "/api/users/changePassword/:id",
        permit.context.validateToken,
        api.users.changePassword,
        validator.users.changePassword,
    );

    app.put(
        "/api/users/update/:id",
        permit.context.validateToken,
        api.users.update
    );
    app.get(
        "/api/users/search",
        permit.context.validateToken,
        api.users.search
    );

    app.post(
        "/api/users/forgotPassword",
        permit.context.builder,
        api.users.forgotPassword
    );

    app.delete( 
        "/api/users/delete/:id",
        permit.context.builder,
        api.users.deleteUser
    );

    app.get(
        "/api/users/getUsers",
        permit.context.validateToken,
        api.users.getUsers
    );

//category api

app.post(
    "/api/category/create",
    permit.context.builder,
    api.category.create
);

app.post(
    "/api/category/createSubCategory",
    permit.context.builder,
    api.category.createSubCategory
);

app.get(
    "/api/category/category",
    permit.context.builder,
    api.category.category
);
app.get(
    "/api/category/showsubcategory/:id",
    permit.context.builder,
    api.category.showsubcategory
);
app.post(
    "/api/category/symptom",
    permit.context.builder,
    api.category.symptom
);
app.get(
    "/api/category/getsymptoms/:id",
    permit.context.builder,
    api.category.getsymptoms
);

//Activity api's
app.post(
    "/api/activities/activity",
    permit.context.builder,
    api.activities.activity
);


    log.end();
};

exports.configure = configure;