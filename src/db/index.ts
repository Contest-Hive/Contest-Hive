import mongoose from "mongoose";

const MongoConnection = async () => {
  var MongoURI = process.env.MONGO_URI || "";
  if (process.env.LOCAL === "true") {
    MongoURI = "mongodb://localhost:27017";
  }
  try {
    if (mongoose.connections[0].readyState)
      return console.log("Already Connected to MongoDB");
    if (process.env.MONGO_URI === undefined)
      return console.log("Mongo URI is not defined");

    const conn = await mongoose.connect(MongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  }
};

export default MongoConnection;
