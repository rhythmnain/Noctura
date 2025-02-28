const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
require("dotenv").config();

//user Sign up
exports.signup = async (requestAnimationFrame, res) => {
    try {
        const { username, email, password } = req.body;
    
        // Check if user exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });
    
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create new user
        user = new User({ username, email, password: hashedPassword });
        await user.save();
    
        res.status(201).json({ message: "User registered successfully!" });
      } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
    
    // User Login
    exports.login = async (req, res) => {
      try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
    
        if (!user) return res.status(400).json({ message: "Invalid credentials" });
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
    
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    
        res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } });
      } catch (error) {
        res.status(500).json({ message: error.message });
    }
};