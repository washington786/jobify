const runServer = (app, PORT) => {
  app
    .listen(PORT)
    .once("connection", function () {
      console.log(`Server is started at ${PORT}`);
    })
    .once("error", function (err) {
      console.log(`Error: ${err}`);
    })
    .once("close", function () {
      console.log("Server is closed");
    });
};

module.exports = runServer;
