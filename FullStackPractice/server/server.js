import express from "express";
import { connectDB } from "./config/db.js";
import router from "./routes/booksRoutes.js";
import cors from "cors"

//1. create an express application
const app = express();

//2. set up all the middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

//npm install cors -> import cors -> do this
//cors (cross origin resource sharing) is a security feature
//controls which website can request data
//so without use cors(), you cannot request API calls from different 
//servers e.g. React localhost:5173 to Server localhost:3000
app.use(cors());

//3. connect to the database
connectDB();

//4. set up the routes
app.use("/", router);

//5. make your server listen to port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`The server is up and listening on PORT${PORT}`);
})