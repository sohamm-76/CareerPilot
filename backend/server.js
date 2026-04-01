require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const marksRoutes = require('./routes/marksRoutes');
const activityRoutes = require('./routes/activityRoutes');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/marks', marksRoutes);
app.use('/api/activities', activityRoutes);

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ success: false, message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));