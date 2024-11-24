const express = require('express'); 
const mongoose = require('mongoose');
const config = require('config'); 
const cors = require('cors');
const app = express(); 
const users = require('./routes/api/users');  


app.use(express.json()) 
app.use(cors());  


const mongo_url = config.get('mongo_url');
mongoose.set('strictQuery', true);
mongoose.connect(mongo_url)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

app.use("/api/users" , users)
const port = process.env.PORT || 3001; 


app.listen(port, () => console.log(`Server is running on port ${port}`));