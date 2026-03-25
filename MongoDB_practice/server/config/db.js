// This contains connection to the database

import mongoose from "mongoose";
import { uriAtlas, uriCompass } from "./atlas_uri.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(uriCompass);
    console.log("connected with DB");
  } catch (err) {
    console.error("Error in connecting", err.message);
    process.exit(1); //exit in case of failure, with exit code 1
  }
};

export const disconnectDB = async () => {
  await mongoose.connection.close();
  console.log("disconnected with DB");
};
