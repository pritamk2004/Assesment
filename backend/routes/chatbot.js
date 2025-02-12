import express from 'express';
import { getChatbotLogs } from '../controllers/chatbotController.js';

const router = express.Router();

router.get('/logs', getChatbotLogs);

export default router;
