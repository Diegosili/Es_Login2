var express = require("express");
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'siliprandi.diego.tave.osdb.it',
    user: 'c192_siliprandi',
    password: 'Az-65956',
    database: 'c192_DSiliprandi'
  });
var cors = require("cors");
var apiServer = express();
apiServer.use(cors());
var fs = require("fs");
const { request } = require("http");

var host = "localhost";
var port = 3000;
apiServer.listen(port, host, ()=>{
    console.log("Server running: http://%s:%d/", host, port);
});

apiServer.get("/api/login", (req, res) => {
    console.log(req.query.mail, req.query.password);
    connection.query(
        "SELECT * FROM Users WHERE mail = '"+req.query.mail+"' AND password = '"+req.query.password+"';",
        function(err, results, fields) {
            if(err){
                console.log(err);
                res.status(500).json({message: "Login failed"});
            } else if(Object.keys(res).length){
                res.status(200).json({"message": "Login succeded"});
            };
            res.status(200).json({"message": "Login failed"});
        }
    );
});

apiServer.get("/api/register", (req, res) => {
    console.log(req.query.mail, req.query.password);
    connection.query(
        "INSERT INTO Users VALUES ('"+req.query.mail+"', '"+req.query.password+"');",
        function(err, results, fields) {
            if(err){
                console.log(err);
                res.status(500).json({message: "errore generico"});
            } else {
                res.status(200).json({"message": "Sign-Up succeded"});
            };
        }
    );
});

apiServer.get("/api/access", (req, res) => {
    connection.query(
        "SELECT * FROM Users WHERE mail ='"+req.query.mail+"';",
        function(err, results, fields) {

        }
    );
});