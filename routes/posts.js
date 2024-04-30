const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const withDB = require('../middleware/withDB');

// GET all blog posts
router.get("/articles/posts", async (req, res) => {
    withDB(async (db, response) => {
        const posts = await db.collection("posts").find().toArray();
        res.json(posts);
    }, res);
});

// GET a single blog post by ID
router.get("/articles/posts/:id", async (req, res) => {
    const postId = req.params.id;
    withDB(async (db, response) => {
        const post = await db.collection("posts").findOne({ _id: new ObjectId(postId) });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    }, res);
});

// POST a new blog post
router.post("/articles/posts", async (req, res) => {
    const { title, content, username, company } = req.body;
    if (!title.trim() || !content.trim() || !username.trim() || !company.trim()) {
        return res.status(400).json({ message: "Title, content, username, and company are required" });
    }
    withDB(async (db, response) => {
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
router.put("/articles/posts/:id", async (req, res) => {
    const postId = req.params.id;
    const { title, content, username, company } = req.body;

    // Validate postId
    if (!ObjectId.isValid(postId)) {
        return res.status(400).json({ message: "Invalid postId format" });
    }

    // Check if title and content are provided
    if (!title || !content || !username || !company) {
        return res.status(400).json({ message: "Title, content, username, and company are required" });
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
        res.json({ message: "Post updated successfully" });
    }, res); // Use a different variable name for the response object inside withDB
});

// DELETE a blog post by ID
router.delete("/articles/posts/:id", async (req, res) => {
    const postId = req.params.id;
    withDB(async (db, response) => {
        const result = await db.collection("posts").deleteOne({ _id: new ObjectId(postId) }); // Use new ObjectId
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json({ message: "Post deleted successfully" });
    }, res);
});

module.exports = router;
