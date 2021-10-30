"use strict";

const express = require("express");
const appConfig = require("config").get("app");
const logger = require("@open-age/logger")("server");
const Http = require("http");
const port = process.env.PORT || appConfig.port || 3000;
const app = express();
var pdf        = require('html-pdf');
var fs         = require('fs');
var options    = {format:'A4'};

var server = Http.createServer(app);
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//set the templat engine
app.set('view engine','ejs');

app.get('/generatePDF/:id',async(req,res)=>{
    let symptom = await db.symptoms.find({ user: { $eq: req.params.id } }).populate('subcatId').populate('user');
    // console.log('id ==>>',symptom)
    res.render('demopdf',{data:symptom},function(err,html){
        pdf.create(html, options).toFile('./pdfUploads/demopdf.pdf', function(err, result) {
            if (err){
                return console.log(err);
            }
             else{
            // console.log(res);
            var datafile = fs.readFileSync('./pdfUploads/demopdf.pdf');
            res.header('content-type','application/pdf');
            res.send(datafile);
             }
          });
    })
})



const boot = () => {
    const log = logger.start("app:boot");
    log.info(`environment:  ${process.env.NODE_ENV}`);
    log.info("starting server");

    server.listen(port, () => {
        log.info(`listening on port: ${port}`);
        log.end();
    });
};

const init = async () => {
    await require("./settings/database").configure(logger);
    await require("./settings/express").configure(app, logger);
    await require("./settings/routes").configure(app, logger);
    boot();
};

init();