import express from 'express';
import Course from '../models/Course.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    return res.json(courses);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
});

export default router;

