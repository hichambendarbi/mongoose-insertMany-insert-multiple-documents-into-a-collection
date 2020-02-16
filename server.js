const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use("/insertapi/lab", require("./routes/insertapi/lab"));

app.listen(PORT, console.log(`Application started on port ${PORT}`));
