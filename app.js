const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");

const homeRouter = require("./routes/home");

app.engine("mustache", mustacheExpress());
app.set("views");
app.set("view engine", "mustache");
app.use("/", homeRouter);

app.listen(3000, () => {
  console.log("Server is running.. ");
});
