import mongoose from "mongoose";
import {uri,url} from "../atlas_uri.js"

export const connectDB = async ()=>{
    try{
        await mongoose.connect(url);
        console.log("Connected to DB");
    }
    catch(err){
        console.log(`ERROR in connecting: ${err.message}`);
        process.exit(1); //exit in case of failure
    }
}
export const disconnectDB = async()=>{
    await mongoose.connection.close();
    console.log("Connection closed");
}