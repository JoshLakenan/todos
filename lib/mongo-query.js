// db.js

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Update with your MongoDB connection string
const dbName = 'todo_users_logins'; // Update with your database name

let client;

async function connectToDatabase() {
  try {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to the database');
    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to the database', error);
    throw error;
  }
}

function closeDatabaseConnection() {
  if (client) {
    client.close();
    console.log('Disconnected from the database');
  }
}

module.exports = { connectToDatabase, closeDatabaseConnection };
