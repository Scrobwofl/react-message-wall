import pg from "pg";
import dotenv from "dotenv";
const DATABASE_URL = process.env.DATABASE_URL;

dotenv.config();
const db = new pg.Pool({
  connectionString: DATABASE_URL,
});

db.query(`CREATE TABLE IF NOT EXISTS messages (
     id SERIAL PRIMARY KEY,
     username VARCHAR(16),
     message TEXT,
     category VARCHAR(16)
   )`);

db.query(`INSERT INTO messages
     (username, message, category)
     VALUES (
      'user1',
      'This is a sample message',
      'general'
   )`);
