const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


app.use(cors({
  origin: ['https://task-frontend-azure.vercel.app/'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));

app.use('/api/users', require('./routes/users'));
app.use('/api/claim', require('./routes/claim'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

