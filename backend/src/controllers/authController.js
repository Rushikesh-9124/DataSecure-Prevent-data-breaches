import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcryptjs from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already in use" });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashed,
    });

    const token = jwt.sign({  id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(201).json({
      success: true,
      token,
      message: "User registered successfully",
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getProfile = async (req, res) => {
  return res.json(req.user);
};

export const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "Email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const adminUser = await User.create({
      name,
      email,
      password: hashed,
      role: "admin"    
    });

    const token = jwt.sign({ id: adminUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(201).json({
      message: "Admin user created",
      token,
      user: {
        id: adminUser._id,
        name: adminUser.name,
        email: adminUser.email,
        role: adminUser.role
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const loginAdmin = async(req, res) => {
  const {email, password} = req.body;
  try {
    const isAdmin = await User.findOne({email, role: "admin"})
    if(!isAdmin){
      return res.status(404).json({
        success: false,
        message: "Admin not found!"
      })
    }
    const adminToken = jwt.sign(
      {id: isAdmin._id},
      process.env.JWT_SECRET,
      { expiresIn: "7d"}
    )
    const hashedPassword = await bcryptjs.compare(password, isAdmin.password)
    if(!hashedPassword){
      return res.status(401).json({
        success: false,
        message: "Incorrect Password!"
      })
    }
    return res.status(201).json({
      success: true,
      message: "Admin user loggedIn",
      adminToken,
      user: {
        id: isAdmin._id,
        name: isAdmin.name,
        email: isAdmin.email,
        role: isAdmin.role
      }
    });
  } catch (error) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
}