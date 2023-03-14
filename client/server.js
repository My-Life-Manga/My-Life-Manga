const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/team-members', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const TeamMember = mongoose.model('TeamMember', {
  name: String,
  role: String,
  pictureUrl: String,
  description: String,
});

app.get('/api/team-members', async (req, res) => {
  const teamMembers = await TeamMember.find();
  res.send(teamMembers);
});

app.listen(3001, () => console.log('Server running on port 3001'));