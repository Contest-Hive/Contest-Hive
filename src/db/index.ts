import mongoose, { ConnectOptions } from "mongoose";

const MongoConnection = async () => {
  try {
    if(mongoose.connections[0].readyState) return console.log('Already Connected to MongoDB');
    if(process.env.MONGO_URI === undefined) return console.log('Mongo URI is not defined');
    
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } as ConnectOptions);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  }
};

export default MongoConnection;
