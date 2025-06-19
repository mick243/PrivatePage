const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 3000;

const postRouter = require("./routes/post.js");

app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
