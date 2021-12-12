const express = require("express");
const app = express();
var Parser = require("expr-eval").Parser;

const publicPath = __dirname + "/public";
app.use("/", express.static(publicPath));

//middlewares ->
function deCrypt(req, res, next) {
  for (let x in req.query) {
    let data = req.query[x];
    data = new Buffer.from(data, "base64").toString("ascii");
    req.query[x] = data;
  }
  next();
}

function deCode(req, res, next) {
  let ans = "";
  let str = req.query.code;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") ans += str[i].toUpperCase();
    else if (str[i] >= "A" && str[i] <= "Z") ans += str[i].toLowerCase();
    else ans += str[i];
  }
  req.query.code = ans;
  next();
}

app.get("/form", deCode, deCrypt, (req, res) => {
  let ans = eval(req.query.code);
  res.send(`<script>alert('The result is : ${ans}')</script>`);
});

app.listen("4444", () => {
  console.log("Listening on 4444");
});
