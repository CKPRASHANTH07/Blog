const express = require("express");
const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json({ extended: false }));


// Middleware to handle MongoDB connection
const withDB = async (operations, res) => {
    try {
      const client = await MongoClient.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1');
      const db = await client.db("mernblog");
      await operations(db, res);
      client.close();
    } catch (e) {
      console.error("Error in connecting to db:", e);
      if (!res.headersSent) {
        res.status(500).json({ message: "Error in connecting to db", error: e });
      }
    }
};

  
// GET all blog posts
app.get("/articles/posts", async (req, res) => {
  withDB(async (db, res) => {
    const posts = await db.collection("posts").find().toArray();
    res.json(posts);
  }, res);
});

// GET a single blog post by ID
app.get("/articles/posts/:id", async (req, res) => {
    const postId = req.params.id;
    withDB(async (db, res) => {
      const post = await db.collection("posts").findOne({ _id: new ObjectId(postId) }); // Use new ObjectId
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(post);
    }, res);
  });

// POST a new blog post
app.post("/articles/posts", async (req, res) => {
    const { title, content, username, company } = req.body;
    if (!title.trim() || !content.trim() || !username.trim() || !company.trim() ) {
      return res.status(400).json({ message: "Title and content are required" });
    }
    withDB(async (db, res) => {
      try {
        const result = await db.collection("posts").insertOne({ title, content, username, company });
        console.log("Insertion result:", result);
        res.status(201).json({ message: "Posted Successfully" });
      } catch (error) {
        console.error("Error in inserting post:", error);
        res.status(500).json({ message: "Error in inserting post", error });
      }
    }, res);
  });
  

// PUT (update) an existing blog post by ID
app.put("/articles/posts/:id", async (req, res) => {
    const postId = req.params.id;
    const { title, content, username, company } = req.body;
    
    // Validate postId
    if (!ObjectId.isValid(postId)) {
      return res.status(400).json({ message: "Invalid postId format" });
    }
    
    // Check if title and content are provided
    if (!title || !content || !username || !company) {
      return res.status(400).json({ message: "Title and content are required" });
    }
  
    // Update the post
    withDB(async (db, response) => {
      const result = await db.collection("posts").updateOne(
        { _id: new ObjectId(postId) }, // Create ObjectId instance
        { $set: { title, content, username, company } }
      );
      if (result.modifiedCount === 0) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json({message:"Post updated successfully"});
    }, res); // Use a different variable name for the response object inside withDB
  });
  
// DELETE a blog post by ID

app.delete("/articles/posts/:id", async (req, res) => {
    const postId = req.params.id;
    withDB(async (db, res) => {
      const post = await db.collection("posts").deleteOne({ _id: new ObjectId(postId) }); // Use new ObjectId
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json({ message: "Post deleted successfully" });
    }, res);
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
