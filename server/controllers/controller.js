const pool = require("../db");
const queries = require("../queries/queries");

const getData = (req, res) => {
  pool.query(queries.getData, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const getIDs = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getIDs, [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const getNames = (req, res) => {
  pool.query(queries.getNames, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const addData = (req, res) => {
  const { first_name, last_name, age, birth_data, team } = req.body;

  pool.query(queries.duplicateTeam, [team], (err, results) => {
    if (results.rows.length > 0) {
      res.status(409).send("Error. Team already exists");
    } else {
      pool.query(
        queries.addData,
        [first_name, last_name, age, birth_data, team],
        (err, results) => {
          if (err) {
            throw err;
          }
          res.status(201).send("Data added.");
        }
      );
    }
  });
};

module.exports = {
  getData,
  getIDs,
  getNames,
  addData,
};
