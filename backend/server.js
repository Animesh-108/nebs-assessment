const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Notice = require('./models/Notice');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/nebs-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Root Route
app.get('/', (req, res) => {
  res.send(`
    <h1>API is running successfully</h1>
    <p>View raw data here: <a href="/api/notices">/api/notices</a></p>
  `);
});

// 1. Create a Notice
app.post('/api/notices', async (req, res) => {
  try {
    const newNotice = new Notice(req.body);
    const savedNotice = await newNotice.save();
    res.status(201).json(savedNotice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 2. Get All Notices
app.get('/api/notices', async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};
    const notices = await Notice.find(query).sort({ createdAt: -1 });
    res.json(notices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Update Notice Status (Publish/Unpublish)
app.patch('/api/notices/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const updatedNotice = await Notice.findByIdAndUpdate(
      req.params.id, 
      { status }, 
      { new: true }
    );
    res.json(updatedNotice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 4. Update Entire Notice (Edit) - From previous step
app.put('/api/notices/:id', async (req, res) => {
  try {
    const updatedNotice = await Notice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedNotice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 5. Delete a Notice - From previous step
app.delete('/api/notices/:id', async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.json({ message: 'Notice deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
