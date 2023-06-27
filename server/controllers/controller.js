const pool = require("../db");

const getData = (req, res) => {
  pool.query("SELECT * FROM crud_data", (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getData,
};
