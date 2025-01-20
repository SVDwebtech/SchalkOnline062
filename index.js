import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import clientsRouter from './src/routes/clients.js'; // Adjust the path to match your file structure
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get the __dirname for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the express app
const app = express();

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse JSON and URLencoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));    

// Define the routes
app.get('/', (req, res) => {
  res.render('underConstruction', { title: 'Home', message: 'Welcome' });
});

// Use the clients routes
app.use('/api', clientsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
 