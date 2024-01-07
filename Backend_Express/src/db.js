const mongoose = require('mongoose')
const MONGODB_URI = require('./config.js').MONGODB_URI

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
