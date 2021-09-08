const express = require("express");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Require routes file
const bootcampRoutes = require("./routes/bootcamps");

const app = express();

// Mount the main route
//@ts-ignore
app.use("/api/v1/bootcamps", bootcampRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  // @ts-ignore
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);