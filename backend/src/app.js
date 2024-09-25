const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

// Connect to MongoDB
connectDB();

// Configure CORS options to allow requests from the frontend app (http://localhost:3000) to the backend server (http://localhost:3001)
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
// Middleware to parse JSON data in the request body
app.use(express.json());
// Routes for the application are defined in the routes module and mounted on the /books path
app.use("/books", routes);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
