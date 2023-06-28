// get operations
const getData = "SELECT * FROM crud_data";
const getIDs = "SELECT * FROM crud_data WHERE id=$1";
const getNames = "SELECT first_name, last_name FROM crud_data";

// post operation
// alias's like "t" are optional but make the query easier to read
// $1, $2... are placeholder parameters that are filled in by the array given
const duplicateTeam = "SELECT t FROM crud_data t WHERE t.team=$1";

const addData =
  "INSERT INTO crud_data (first_name, last_name, age, birth_data, team) VALUES ($1, $2, $3, $4, $5)";

// delete operation
const deleteData = "DELETE FROM crud_data WHERE id=$1";

// put operation
const updateData =
  "UPDATE crud_data SET first_name=$1, last_name=$2, age=$3, birth_data=$4, team=$5 WHERE id=$6";

module.exports = {
  getData,
  getIDs,
  getNames,
  duplicateTeam,
  addData,
  deleteData,
  updateData,
};
