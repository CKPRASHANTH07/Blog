const express = require("express");
const cors = require("cors");
const postsRouter = require("./routes/posts");

const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");
app.use(cors());
app.use(express.json({ extended: false }));

const __dirname1 = path.resolve();

if (true) {
	app.use(express.static(path.join(__dirname1, "/frontend/build")));

	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname1, "Frontend", "build", "index.html")),
	);
	// app.get("/", (req, res) => {
	//   res.send("API is running..");
	// });
} else {
	app.get("/", (req, res) => {
		res.send("API is running..");
	});
}
app.use("/", postsRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
