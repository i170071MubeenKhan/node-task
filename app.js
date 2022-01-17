// const express = require("express");
// const bodyParser = require("body-parser");

// const userRoutes = require("./routes/user");

// const app = express();

// app.use(bodyParser.json()); // application/json

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

// app.use("/user", userRoutes);

// // server port - if not define, set it to 8080
// const PORT = process.env.PORT || 8080;
// app.listen(PORT);

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./util/db");
const userRoutes = require("./routes/user");
const app = express();

// allowing every client to access my api
app.use(
  cors({
    origin: "*",
  })
);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome!!!" });
});

// syncing models with tables in db
sequelize.sync();

// setting port, listen at 8080 if not defined
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
