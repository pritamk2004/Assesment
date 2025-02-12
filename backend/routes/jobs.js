import express from 'express';
import { getJobs, createJob } from '../controllers/jobController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/', getJobs);
router.post('/', authenticate, createJob); // Protected route

export default router;
