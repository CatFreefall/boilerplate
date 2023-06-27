const getData = "SELECT * FROM crud_data";
const getIDs = "SELECT * FROM crud_data WHERE id=$1";
const getNames = "SELECT first_name, last_name FROM crud_data";

const duplicateTeam = "SELECT t FROM crud_data t WHERE t.team=$1";
// "SELECT * FROM crud_data WHERE team=$1"
const addData =
  "INSERT INTO crud_data (first_name, last_name, age, birth_data, team) VALUES ($1, $2, $3, $4, $5)";

module.exports = {
  getData,
  getIDs,
  getNames,
  duplicateTeam,
  addData,
};
