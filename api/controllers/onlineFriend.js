import axios from 'axios';

export const getOnlineUsers = async (req, res) => {
  try {
    const response = await axios.get('/online-friends');
    const onlineUsers = response.data;
    res.status(200).json(onlineUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
