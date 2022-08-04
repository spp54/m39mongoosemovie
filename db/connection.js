require('dotenv').config();
const mongoose = require("mongoose");
console.log("what the fuck 2")


const connection = async () => {
  try {console.log("what the fuck3")
    await mongoose.connect(process.env.MONGO_URI)
    console.log("what the fuck4")
    console.log("Successfully connected");
  } catch (error) {
    console.log(error);
  }
};

connection();