const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Require routes file
const bootcampRoutes = require("./routes/bootcamps");

const app = express();

// Dev logs
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Mount the main route
//@ts-ignore
app.use("/api/v1/bootcamps", bootcampRoutes);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  // @ts-ignore
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  // @ts-ignore
  console.log(`Error: ${err.message}`);

  //Close server & exit process
  server.close(() => process.exit(1));
});
