const conn = require("../mysql");

const getAllPosts = (req, res) => {
  const query =
    "SELECT post_id, title, content, created_at, images, category FROM board";
  conn.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: "서버 에러 발생" });
    }

    return res.send(results);
  });
};

module.exports = {
  getAllPosts,
};
