const { MongoClient } = require('mongodb');

const withDB = async (operations, response) => {
    try {
        const client = await MongoClient.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1');
        const db = await client.db("mernblog");
        await operations(db, response);
        client.close();
    } catch (e) {
        console.error("Error in connecting to db:", e);
        if (!response.headersSent) {
            response.status(500).json({ message: "Error in connecting to db", error: e });
        }
    }
};

module.exports = withDB;
