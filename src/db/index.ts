import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error("MONGO_URI must be defined");
}

let cachedConnection: mongoose.Connection | null = null;

async function connectDatabase() {
  if (cachedConnection) return cachedConnection;

  const connection = await mongoose.connect(MONGODB_URI, {
    maxPoolSize: 10,           // Increased connection pool
    minPoolSize: 5,            // Minimum maintained connections
    socketTimeoutMS: 45000,    // Extended socket timeout
    serverSelectionTimeoutMS: 45000,
    waitQueueTimeoutMS: 45000, // Wait time for connection
    connectTimeoutMS: 10000,   // Connection attempt timeout
    retryWrites: true
  });

  cachedConnection = connection.connection;
  return cachedConnection;
}

export default connectDatabase;