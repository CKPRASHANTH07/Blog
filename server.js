const express = require("express");
const app = express();
const {MongoClient}= require("mongodb");
const PORT = process.env.PORT || 8000;


app.use(express.json({ extended: false }));
try {
    app.get("/articles/:name", async (req, res) => {
        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1');
        const db = client.db("mernblog");
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
        client.close();
    });
} catch (error) {
    res.status(500).json({message:"Error in connecting to db",error});
}


app.post("/articles/:name/add-comments", (req, res) => {
    const { username, text , date } = req.body;
    const articleName = req.params.name;
    articlesInfo[articleName].comments.push({ username, text , date });
    res.status(200).send(articlesInfo[articleName]);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
