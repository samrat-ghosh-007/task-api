const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


// ✅ Dynamic CORS setup
const allowedOrigins = [
  'https://task-frontend-azure.vercel.app',
  'https://task-frontend-hf2ww8tpm-samrat-ghoshs-projects-350a7834.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS Not Allowed'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: false
}));

app.options('*', cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));

app.use('/api/users', require('./routes/users'));
app.use('/api/claim', require('./routes/claim'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

