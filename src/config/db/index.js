const mongoose = require('mongoose')

const connectDb = () => {
  mongoose
    .connect('mongodb://localhost:27017/learn-nodejs-expressjs')
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ Connection error:', err))
}

module.exports = connectDb
