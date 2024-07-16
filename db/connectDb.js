// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//       const conn = await mongoose.connect(process.env.MONGO_URI);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

//   export default connectDB;
import mongoose from 'mongoose';

let isConnected = false;

const uri = process.env.MONGO_URI; // MongoDB connection URI from environment variable

const connectDB = async () => {
  mongoose.set('strictQuery', true);
  if(isConnected) return console.log('Already connected to MongoDB')
  
  try{
    await mongoose.connect(uri);
    isConnected=true;

    console.log('Connected to MongoDB');
  }
  catch(error){
    console.log(error);
  }
};
export default connectDB;