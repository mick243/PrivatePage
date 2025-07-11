const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const port = 8080;

const postRouter = require("./routes/post.js");

app.use(cors());
app.use(express.json());
app.use("/posts", postRouter);

app
  .listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  })
  .on("error", (err) => {
    console.error("Server failed to start:", err);
  });
