const express = require('express');
const cors = require('cors');
const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json({ extended: false }));

app.use('/', postsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
