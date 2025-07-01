const conn = require("../mysql");

const getAllPosts = (req, res) => {
  const query = "SELECT * FROM post ORDER BY post_id DESC;";
  conn.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: "서버 에러 발생" });
    }

    return res.send(results);
  });
};

const getPostById = (req, res) => {
  const post_id = req.params.post_id;
  const query = "SELECT * FROM post WHERE post_id = ?";

  conn.query(query, [post_id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: "서버 에러 발생" });
    }

    if (results.length === 0) {
      return res
        .status(404)
        .send({ message: "해당 게시글을 찾을 수 없습니다." });
    }

    return res.send(results[0]);
  });
};

module.exports = {
  getAllPosts,
  getPostById,
};
