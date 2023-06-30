const mongoose = require("mongoose");
mongoose.connect(process.env.CONNECTION_STRING)
.then(() => console.log('Connected to DB'))
.catch((error) => console.log('Error connecting to DB', error));


// module.exports = connectionString



