const conn = require("../mysql");

const getAllPosts = (req, res) => {
  const query =
    "SELECT post_id, category_id, category_name, title, content, images, created_at FROM post";
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
