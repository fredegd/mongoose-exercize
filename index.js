const express = require("express");
require("dotenv/config")
const cors = require("cors");
require("./db")
const userRouter = require("./routes/users")
const eventRouter = require("./routes/event")

const User = require("./models/user");

// //after initial connection
// mongoose.connection.on("error", (err) => console.log("Lost Connection", err));

const app = express();
const PORT = process.allowedNodeEnvironmentFlags.PORT || 3000;
app.use(express.json());
app.use("/users", userRouter)
app.use("/events", eventRouter)

 

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} http://localhost:${PORT}`);
  });
  