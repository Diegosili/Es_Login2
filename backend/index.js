var express = require("express");
var cors = require("cors");
var apiServer = express();
apiServer.use(cors());

var host = "localhost";
var port = 3000;
apiServer.listen(port, host, ()=>{
    console.log("Server running: http://%s:%d/", host, port);
});

apiServer.get("/api/login", (req, res) => {
    console.log("recived:", req.query.mail, req.query.password);
    if(req.query.mail==="diego" && req.query.password==="siliprandi"){
        res.statusCode = 200;
        res.json({"message": "Login effettuato"});
    } else {
        res.sendStatus(400);
    }
});