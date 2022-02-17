var express = require("express");
var apiServer = express();
apiServer.use(cors());

var host = "localhost";
var port = 3000;
apiServer.listen(port, host, ()=>{
    console.log("Server running: http://%s:%d/", host, port);
});

apiServer.get("/api/login", (req, res) => {
    console.log("recived:", req.query.mail, req.query.password);
    if(req.query.mail==="mattia" && req.query.password==="pogliani"){
        res.sendStatus(200);
    } else{
        res.status(400);
    }
});