var express = require("express");
var cors = require("cors");
var apiServer = express();
apiServer.use(cors());
var fs = require("fs");

var host = "localhost";
var port = 3000;
apiServer.listen(port, host, ()=>{
    console.log("Server running: http://%s:%d/", host, port);
});

apiServer.get("/api/login", (req, res) => {
    fs.readFile("users.json", (err, data)=>{
        if(err){
            console.log(err);
            res.status(500).json({message: "errore generico"});
        } else {
            var login = false;
            var datajson = JSON.parse(data);
            datajson.forEach((dt) => {
                if(req.query.mail===dt['mail'] && req.query.password===dt['password']){
                    res.status(200).json({"message": "Login succeded"});
                    login = true;
                    return;
                }
            });
            if(login) res.status(400).json({"message": "Login failed"});
        }
    });
});

apiServer.get("/api/register", (req, res) => {
    fs.readFile("users.json", (err, data)=>{
        if(err){
            console.log(err);
            res.status(500).json({message: "errore generico"});
        } else {
            var dtjson = JSON.parse(data);
            dtjson.push({"mail":req.query.mail,"password":req.query.password});
            fs.writeFile("users.json", JSON.stringify(dtjson), (err)=>{
                if(err) res.status(200).json({message:"sign-up failed"});
                else res.status(400).json({message:"sign-up"});
            });
        }
    });
});