import dotenv from "dotenv";
import { app } from "./app.js";
import {db} from "./utils/dbutil.js";


dotenv.config({
    path: "./.env",
});


db
.getConnection(() => {
    try{
        console.log("Connected to database");
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }catch(err){
        console.log("Error connecting to database",err);
    }
});



