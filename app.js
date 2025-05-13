// app.js

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");

const app = express();
const port = 3000;

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Parse form data sent via POST
app.use(express.urlencoded({ extended: true }));

// Serve static files (if you have any)
app.use(express.static(path.join(__dirname, 'public')));

// Use routes and pass the arrays to pageRoutes.js
app.use("/", pageRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
