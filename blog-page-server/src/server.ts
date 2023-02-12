import express, { Request, Response } from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import multer from "multer";
import * as path from "path";

const app = express();
app.use(express.json());
const port = 3004;
app.use(cors());

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "blog",
});

//get all posts
app.get("/posts", async (req: Request, res: Response) => {
  try {
    const [rows] = await connection.query("SELECT * FROM posts");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching posts");
  }
});

//get all comments
app.get("/comments", async (req: Request, res: Response) => {
  try {
    const [rows] = await connection.query("SELECT * FROM comments");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching posts");
  }
});

//get individual post
app.get("/posts/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [rows] = await connection.query("SELECT * FROM posts WHERE id = ?", [
      id,
    ]);
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the post");
  }
});

//add individual comment
app.post("/comments", async (req: Request, res: Response) => {
  const { author, avatar, commentText, commentedOn } = req.body;
  try {
    const [result] = await connection.query(
      "INSERT INTO comments (author, avatar, commentText, commentedOn) VALUES (?, ?, ?, ?)",
      [author, avatar, commentText, commentedOn]
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the post");
  }
});

//edit individual post
app.put("/posts/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, image, description, excerpt } = req.body;

  try {
    const [result] = await connection.query(
      "UPDATE posts SET title = ?, image = ?, description = ?, excerpt = ? WHERE id = ?",
      [title, image, description, excerpt, id]
    );
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the post");
  }
});

//handle image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/public/images/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

//get all posts
app.post("/posts", upload.single("image"), async (req, res) => {
  try {
    const post = {
      title: req.body.title,
      description: req.body.description,
      excerpt: req.body.excerpt,
      image: req.file.path,
    };
    const imageName = String(post.image).split(`\\`);
    const fileName = imageName[imageName.length - 1];
    const [rows] = await connection.query(
      "INSERT INTO posts (title, image, description, excerpt) VALUES (?, ?, ?, ?)",
      [post.title, fileName, post.description, post.excerpt]
    );
    res.json({ message: "Post created successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to create post." });
  }
});

app.use(express.static("src/public"));
app.use("/static", express.static("src/public/images"));

app.get("/posts/:id/image", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [rows] = await connection.query(
      "SELECT image FROM posts WHERE id = ?",
      [id]
    );
    const image = rows[0].image;
    res.sendFile(path.join(__dirname, "public/images/", image.fileName));
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the image");
  }
});

//port listening
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
