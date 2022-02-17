var express = require("espress");
var apiServer = express();

var host = "localhost";
var port = 3000;
apiServer.listen(port, host, ()=>{
    console.log("Server running: http://%s:%d/", host, port);
});

apiServer.get("/api/login", (req, res) => {
    console.log("recived:", req.query.mail, req.query.password);
});