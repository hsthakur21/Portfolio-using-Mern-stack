const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/Register'); // Correctly importing the model

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// POST request to register a message
app.post('/register', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Check if a message with the same email and subject already exists
  RegisterModel.findOne({ email: email, subject: subject })
    .then(user => {
      if (user) {
        res.json("Already sent the same subject message");
      } else {
        // Create a new entry in the database
        RegisterModel.create({ name: name, email: email, subject: subject, message: message })
          .then(result => res.send("Message sent, I'll contact you soon"))
          .catch(err => {
            console.error("Error saving to database:", err);
            res.status(500).json({ error: "Internal server error" });
          });
      }
    })
    .catch(err => {
      console.error("Error querying the database:", err);
      res.status(500).json({ error: "Internal server error" });
    });
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
