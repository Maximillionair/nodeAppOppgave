const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('./router/routes.js'); 
const app = express();
const {connectDB} = require("./handlers/dbhandler.js");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://10.12.10.24:3500', // Tillat spesifikke opprinnelser
  methods: ['GET', 'POST'], // Tillatte metoder
}));
app.use(router);

const PORT = process.env.PORT || 3150;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
