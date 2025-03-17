// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const User = require('./models/User');

// const app = express();
// app.use(express.json());

// // Connect to MongoDB with debugging
// mongoose.connect('mongodb://localhost:27017/onlineMarketplace', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 5000, // Increase timeout
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => {
//   console.error('Failed to connect to MongoDB:', err);
//   process.exit(1); // Exit the process if MongoDB connection fails
// });

// // Registration Endpoint
// app.post('/register', async (req, res) => {
//   const { username, email, password } = req.body;

//   if (!username || !email || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Username or email already exists' });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error('Error during registration:', err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Default route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Online Marketplace API');
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });