const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(mongodb+srv://aslearner:laxman_133@cluster0.a2daae5.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0);
    console.log("Connect to MongoDB successfully");
  } catch (error) {
    console.log("Connection failed");
  }
};
module.exports = connectDB;
