import { makeRequest } from 'axios';

exports.getOnlineUsers = async (req, res) => {
  try {
    const response = await makeRequest.get('/online-friends');
    const onlineUsers = response.data;
    res.status(200).json(onlineUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
