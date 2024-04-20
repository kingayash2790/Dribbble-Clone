import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import { Resend } from "resend";

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend('re_jCcjzT9R_6LFy1GFTk7x8eR9MSezX7H3o');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Dribbble", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DB connected");
});

// USERS COLLECTION
// Define schema and model
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("users", userSchema);

// POST route to handle form submission
app.post("/signup", async (req, res) => {
  const { name, username, email, password } = req.body;

  // Check if all fields are filled
  if (!name || !username || !email || !password) {
    return res.status(400).send("All fields are required.");
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists." });
    }
    const newUser = new User({ name, username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully.", user: newUser });


    const val=newUser.email;
    //email
    try {
      const response = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [val],
        subject: 'Thank you for signing up',
        text: 'Thank you for signing into our website! Hope you will have a wonderful ride through our design templates',
        headers: {
          'X-Entity-Ref-ID': '123456789',
        },
      });
    
      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// PROFILE COLLECTION
const profileSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  // You can add more fields to the schema as needed
});

const Profile = mongoose.model('profiles', profileSchema);



// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename files with a unique timestamp
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// POST endpoint to handle profile data
app.post('/createprofile', upload.single('image'), async (req, res) => {
  console.log('Received POST request to /createprofile');
  console.log('Request Body:', req.body); // Log the request body
  const location = req.body.location;
  const imagePath = req.body.image;

  try {
    // Create a new profile document using the Profile schema
    const newProfile = new Profile({ location, imagePath });

    // Save the new profile document to the database
    await newProfile.save();

    // Respond with a success message and the profile data
    res.status(200).json({ message: 'Profile data saved successfully', imagePath, location });
  } catch (error) {
    console.error('Error saving profile data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = 9002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
