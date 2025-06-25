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

module.exports = {
  getAllPosts,
};
