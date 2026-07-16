require('dotenv').config()

const express = require('express')
const cors = require('cors')

const { connectDB, getDBStatus } = require('./config/db')

// Routes
const authRoutes = require('./routes/authRoutes')
const medicineRoutes = require('./routes/medicineRoutes')
const profileRoutes = require('./routes/profileRoutes')

const app = express()

app.use(cors())
app.use(express.json())

const startServer = async () => {
  try {
    await connectDB()

    app.get('/', (req, res) => {
      res.send('Medicine Reminder Backend Running Successfully')
    })

    app.get('/api/health', (req, res) => {
      res.json({
        success: true,
        message: 'Backend is running',
        database: getDBStatus(),
      })
    })

    app.use('/api/auth', authRoutes)
    app.use('/api/medicines', medicineRoutes)
    app.use('/api/profile', profileRoutes)

    app.use((err, req, res, next) => {
      console.error(err.stack)
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      })
    })

    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on Port ${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error.message)
    process.exit(1)
  }
}

startServer()