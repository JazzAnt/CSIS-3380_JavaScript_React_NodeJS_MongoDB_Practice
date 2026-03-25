import express from "express";
import { connectDB, disconnectDB } from "./config/db.js";
import router from "./routes/booksRoutes.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); //for static files, put them in the public folder

//app.use(cors()); 

/**
 * cross origin resource sharing, when trying to fetch a page from a different page
 * cors are rejected by default, this enables it
 * (note, you need to npm install cors first)
 */

//1. Connect to DB
connectDB();

//2. Set up Routes at the root route
// if have multiple routes you can also do something like "/books" for bookRouter etc
app.use("/", router);

// if the host set any port, use it. Otherwise use 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is up and listening on port", PORT);
});
