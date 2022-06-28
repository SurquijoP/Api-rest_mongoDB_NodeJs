const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/users")

const app = express();
const port = process.env.PORT || 9000;

//mongodb Conection
mongoose.connect(process.env.MONGODB_URI)
.then(() => 
    console.log("Connected to mongoDB"))
.catch((error) => 
    console.log(error));    

app.listen(port, () => console.log("Server listening on port " + port));

//middleware
app.use(express.json());
app.use('/API', userRoutes);


//routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

