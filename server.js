// server.js
// where your node app starts
// init project
const express = require("express");
const app = express();
const PORT = 8008
// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/view/index.html");
});
// listen for requests :)
const listener = app.listen(PORT, function() {
  console.log("Your app is listening on port: " + PORT);
});

module.exports = app;
