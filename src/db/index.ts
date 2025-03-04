import mongoose from "mongoose";

const MongoURI = process.env.MONGO_URI || (process.env.LOCAL === "true" ? "mongodb://localhost:27017" : "");

if (!MongoURI) {
  throw new Error("Mongo URI is not defined");
}

let cached = global.mongoose; // Use global object to persist connection in serverless environments

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const MongoConnection = async () => {
  if (cached.conn) {
    console.log("Using existing MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MongoURI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      bufferCommands: false, // Disable buffering to avoid memory leaks
    }).then((conn) => {
      console.log(`MongoDB Connected: ${conn.connection.host}`);
      return conn;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default MongoConnection;