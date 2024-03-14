const mongoose = require("mongoose");
const connectDb = async () => {
  mongoose.connect(process.env.MONGO_URI).then(() => console.log("connectd"));
};
module.exports = connectDb;
