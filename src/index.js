import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});

// console.log("ENV:", process.env); // See all env variables

import { db } from "./utils/dbutil.js";
import { app } from "./app.js";

console.log("Attempting DB connection...");

// Connect to the database and start the server only if successful
// mysql2 getConnection callback: (err, connection)
db.getConnection()
    .then((connection) => {
        console.log("Connected to database");
        connection.release();

        app.listen(process.env.PORT || 8000, '0.0.0.0', () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
        process.exit(1);
    });



