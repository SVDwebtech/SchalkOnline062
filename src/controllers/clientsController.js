import connection from '../../config/db/connection.js';

// Test database connection
export const testConnection = (req, res) => {
  connection.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
      console.error('Error with the MySQL connection:', err);
      return res.status(500).json({ message: 'Database connection failed' });
    }
    res.json({ message: 'Database connection successful', solution: results[0].solution });
  });
};

// Get all clients
export const getAllClients = (req, res) => {
  connection.query('SELECT * FROM clients', (err, results) => {
    if (err) {
      console.error('Error fetching clients data:', err);
      return res.status(500).json({ message: 'Failed to retrieve clients data' });
    }
    res.json(results);
  });
};
