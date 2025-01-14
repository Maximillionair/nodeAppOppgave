const express = require('express');
const path = require('path');
const router = require('./router/routes.js'); 
const app = express();  
const {connectDB} = require("./handlers/dbhandler.js")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const PORT = process.env.PORT || 3150;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
