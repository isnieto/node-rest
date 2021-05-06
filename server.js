// SERVER: App entry point
const app = require("./app");


// SERVER: port variable
const PORT = 5000;

require("./routes/router.js")(app);

app.listen(PORT, () => {
  console.log("Express server started and running on port: " + PORT);
});
