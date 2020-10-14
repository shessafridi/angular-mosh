const express = require("express");

const app = express();

app.use(express.static(__dirname + "/dist/angular-mosh"));

app.get("*", (req, res) => {
  res.status(200).sendFile(__dirname + "/dist/angular-mosh/index.html");
  console.log(__dirname + "/dist/angular-mosh/index.html");
});

app.listen(process.env.PORT || 8080, () => console.log("Server is started"));
