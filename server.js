import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

// Middleware
const corsOptions = {
  origin: 'http://localhost:3000', // Your React app URL (Update this when deploying)
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Simulate a user authentication system
const users = [
  { username: 'testUser', password: 'testPassword', roles: ['user'] },
];

// Login Route
app.post('/auth', (req, res) => {
  const { user, pwd } = req.body;

  // Check if the user exists
  const foundUser = users.find((u) => u.username === user && u.password === pwd);

  if (!foundUser) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Simulate sending back an access token and user roles
  const accessToken = 'fakeAccessToken123'; // In a real app, generate a JWT or similar
  res.json({
    accessToken,
    roles: foundUser.roles,
  });
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
