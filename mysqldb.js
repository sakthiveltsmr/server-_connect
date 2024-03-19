// Import the mysql module
const mysql = require('mysql');

// Create a connection object
const connection = mysql.createConnection({
  host: 'your_database_host',
  user: 'your_database_username',
  password: 'your_database_password',
  database: 'your_database_name'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database as id', connection.threadId);
});

// You can now use the 'connection' object to perform database operations

// For example, you can execute a query
connection.query('SELECT * FROM your_table', (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err.stack);
    return;
  }
  console.log('Query results:', results);
});

// Don't forget to close the connection when done
connection.end();
