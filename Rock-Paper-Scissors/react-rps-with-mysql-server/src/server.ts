import mysql from "mysql2/promise";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
const port = 3004;
app.use(cors());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "RockPaperScissors",
});

app.get("/players", async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM players");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching posts");
  }
});

app.get("/user_moves", async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM user_moves");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching posts");
  }
});

app.get("/user_moves/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM user_moves WHERE user_id = ?",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the post");
  }
});

app.post("/user_moves", async (req: Request, res: Response) => {
  const { username, weapon, is_victory } = req.body;
  const date_played = new Date();

  try {
    const [playerRows] = await pool.query(
      "SELECT * FROM players WHERE username = ?",
      [username]
    );

    if (Array.isArray(playerRows) && playerRows.length === 0) {
      await pool.query("INSERT INTO players (username) VALUES (?)", [username]);
    }

    await pool.query(
      "INSERT INTO user_moves (username, weapon, is_victory, date_played) VALUES (?, ?, ?, ?)",
      [username, weapon, is_victory, date_played]
    );

    await pool.query(
      `UPDATE players SET game_count = game_count + 1 WHERE username = ?`,
      [username]
    );
    res.status(201).send("Move saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while saving the move");
  }
});

app.listen(3004, () => {
  console.log(`Server listening on port ${port}`);
});
