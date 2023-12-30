import mongoose from "mongoose";

export const DB_CONNECT = async () => {
  try {
    const url = process.env.DB_URL || '';

    mongoose.connect(url);

  } catch(err) {
    console.log(err);    
  }
}
