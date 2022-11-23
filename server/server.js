const express = require("express");

const app = express();
const port = 5001;

app.use(express.static("server/public"));

const quoteList = require("./modules/quoteList");

app.listen(port, () => {
  console.log("listening on port ", port);
});

// node server/server.js opens the server, go to browser and type localhost:5001 (in this case)
// can also go into .json scripts and add "node server/server.js"
// control + c closes the server
// CRUD: Create(post), Read(get), Update(put), Delete(delete)

// when you hit the /quotes route, do this
// req is request, res is response. Req always comes before res
app.get("/quotes", function (req, res) {
  console.log("request for /quotes was made");
  res.send(quoteList);
});

//
