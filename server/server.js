require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const router = require("./routes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);
app.use(helmet());
app.use(morgan("dev"));

app.use(express.static("dist/"));
app.get("/", (request, response) =>
  response.sendFile(path.join(__dirname + "/../dist/index.html"))
);

app.listen(process.env.PORT, () => {
  console.log(chalk.green(`App running on port ${process.env.PORT}`));
});
