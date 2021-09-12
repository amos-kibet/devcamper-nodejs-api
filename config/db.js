const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    //@ts-ignore
    useNewUrlParser: true,
  });

  console.log(`MongoDB connected: `); //${conn.connection.host} throws error
};

module.exports = connectDB;
