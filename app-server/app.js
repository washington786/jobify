const express = require("express");
const runServer = require("./utils/startServer.utils");
const errorHandler = require("./middlwares/error-handler.middleware");
const errorRouter = require("./middlwares/not-found.middleware");

const cors = require("cors");
const dbConnection = require("./utils/connect-mongoose.util");
const authRouter = require("./routers/auth.router");
const jobsRouter = require("./routers/jobs.router");
const auth = require("./middlwares/authentication.middle");

const app = express();

// database connection: mongoose
dbConnection();

// mandatory
app.use(cors());
app.use(express.json());

app.get("/", function (req, res, next) {
  return res.status(200).json({
    status: "OK",
    message: "server is on home page",
  });
});

// authorization and authentication routes
app.use('/auth',authRouter)
app.use('/jobs',auth,jobsRouter)

// routes for not found pages and error:
// app.use(errorRouter);
app.use(errorHandler);



// start server on the initialized port: 9090
const PORT = 9090;
runServer(app, PORT);
