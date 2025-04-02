import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error("MONGO_URI must be defined");
}

let cachedConnection: mongoose.Connection | null = null;

async function connectDatabase() {
  if (cachedConnection) return cachedConnection;

  const connection = await mongoose.connect(MONGODB_URI, {
    maxPoolSize: 2,           // Increased connection pool
    socketTimeoutMS: 4500,    // Extended socket timeout
    serverSelectionTimeoutMS: 4500,
    waitQueueTimeoutMS: 4500, // Wait time for connection
    connectTimeoutMS: 5000,   // Connection attempt timeout
    retryWrites: true
  });

  cachedConnection = connection.connection;
  return cachedConnection;
}

export default connectDatabase;