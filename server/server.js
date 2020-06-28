require("./config/config");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/usuario", function (req, res) {
  res.json("get Usuario");
});

app.put("/usuario/:id", function (req, res) {
  let idUsuario = req.params.id;

  res.json({
    id: idUsuario,
  });
});

app.post("/usuario", function (req, res) {
  let body = req.body;
  if (body.nombre === undefined) {
    res.status(400).json({
      ok: false,
      mensaje: "nombre es nesasio",
    });
  } else {
    res.json({
      persona: body,
    });
  }
});

app.delete("/usuario", function (req, res) {
  res.json("Delete Usuario");
});

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
});
