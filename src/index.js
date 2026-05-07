//import dotenv from "dotenv"; as early as possible to load environment variables from .env file so that they are available throughout the application

import "dotenv/config";


import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Server error:", error);
      process.exit(1); 
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("DB connection failed:", error);
    process.exit(1);
  });

/*
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Running on ${PORT}`));
  } catch (err) {
    process.exit(1);
  }
};
 */
