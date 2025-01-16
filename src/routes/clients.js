import express from 'express';
import { testConnection, getAllClients } from '../controllers/clientsController.js';

const router = express.Router();

// Test the connection
router.get('/test-connection', testConnection);

// Retrieve all clients
router.get('/clients', getAllClients);

export default router;
