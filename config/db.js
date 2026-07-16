const mongoose = require('mongoose')

let isDBReady = false

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      isDBReady = true
      return true
    }

    const mongoUri = process.env.MONGO_URI?.trim()
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined in environment variables')
    }

    console.log('Connecting to MongoDB URI:', mongoUri.startsWith('mongodb') ? mongoUri.slice(0, 40) + '...' : mongoUri)
    await mongoose.connect(mongoUri)
    isDBReady = true
    console.log('✅ MongoDB connected successfully')
    return true
  } catch (error) {
    isDBReady = false
    console.error('❌ MongoDB connection failed:', error.message)
    throw error
  }
}

const getDBStatus = () => ({
  ready: isDBReady,
  state: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
})

module.exports = {
  connectDB,
  getDBStatus,
}