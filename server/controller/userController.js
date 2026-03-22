import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//Generate JWT Token
const generateToken = (userId) => {
    const payload = userId;
    return jwt.sign(payload, process.env.JWT_SECRET);
}


// Controller to handle new user registration
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;// Extract user input from request body

        if (!name || !email || !password || password.length < 8) {
            return res.json({ success: false, message: 'Fill all the fields' });
        }

        const userExists = await User.findOne({ email }); // Check if a user with the same email already exists in the database
        if (userExists) {
            return res.json({ success: false, message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });//// Create a new user document in MongoDB
        const token = generateToken(user._id.toString());
        res.json({ success: true, token });//// Send success response with authentication token

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};


// Controller to handle user login
export const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email });// Check if user exists in database using email

        // If no user found, stop execution
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);// Compare entered password with hashed password stored in DB
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials" });// If password does not match, deny login
        }

        // Generate authentication token using user's ID
        const token = generateToken(user._id.toString());
        // Send success response with JWT token
        res.json({ success: true, token });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }

};


//get user data  using token (JWT)
export const getUserData = async (req, res) => {
    try {
        const { user } = req;
        res.json({ success: true, user })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}