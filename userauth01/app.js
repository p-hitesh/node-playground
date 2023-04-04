require("dotenv").config();
//alternate way of importing .env configs is with 'const dotenv = require("dotenv");' and initiate it with 'dotenv.config();'
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

//import routes
const authRoute = require("./routes/auth");

//taking input in json format instead of javascript
app.use(express.json());

//Route Middlewares
app.use("/api/users", userRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("server is up and running on port : ", process.env.APP_PORT);
});
