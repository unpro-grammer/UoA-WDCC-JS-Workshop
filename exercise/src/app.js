import express from "express";
import cors from "cors";

// Sets our port to the PORT environment variable, or 3000 by default if the env is not configured.
const PORT = process.env.PORT ?? 3000;

// Create the Express server

const app = express();


// Configure middleware with app.use() (CORS support, JSON parsing support, static files support)

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // public sets up public directory to be readable

// Your application routes here

import routes from "./routes/routes.js";
app.use("/", routes);

// TODO Start the server
app.listen(PORT, () => console.log(`App server listening on port ${PORT}!`));


