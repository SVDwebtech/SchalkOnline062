import mysql from 'mysql2';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,  // Set this in your .env file
  user: process.env.DB_USER,  // Set this in your .env file
  password: process.env.DB_PASSWORD,  // Set this in your .env file
  database: process.env.DB_NAME   // Set this in your .env file
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', connection.threadId);
});

export default connection;
