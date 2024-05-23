const mongoose = require("mongoose");
MONGODB_CONNECT_URI =
  "mongodb+srv://aslearner:laxman_133@cluster0.a2daae5.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
PORT = 8133;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_CONNECT_URI);
    console.log("Connect to MongoDB successfully");
  } catch (error) {
    console.log("Connection failed");
  }
};
module.exports = connectDB;
