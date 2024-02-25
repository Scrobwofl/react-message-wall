const PORT = 8080;
const DATABASE_URL = process.env.DATABASE_URL;

//import dotenv
import dotenv from "dotenv";
dotenv.config();

// import and setup Express
import express from "express";
const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// import and setup cors
import cors from "cors";
app.use(cors());

// Import postgres
import pg from "pg";
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// ========================================= //

// Root Route
app.get("/messages", async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM messages;`);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Add Data
app.post("/messages", async (req, res) => {
  const { username, message, category } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO messages(username, message, category)
      VALUES($1, $2, $3) RETURNING *;`,
      [username, message, category]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json(result);
  }
});

// Delete Data
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  try {
    const deletePost = db.query(`DELETE FROM messages WHERE id = $1`, [id]);
    res.status(200).json(deletePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Fetch by category
app.get("/messages/category/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const result = await db.query(
      `SELECT * FROM messages WHERE category = $1`,
      [category]
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// // Update data
// // I think this is a lot more complicated
// app.update("/messages/:id", (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatePost = db.query(`UDPATE messages WHERE id = $1`, [id]);
//     res.status(200).json(result);
//   } catch {
//     console.log(error);
//     res.status(500).json(result);
//   }
// });

// filtered data / category pages
// What to do here?
