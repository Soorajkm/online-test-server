const { getDBConn } = require("../common/getConn");
const getQueDao = async () => {
  var db = await getDBConn();
  var collection = db.collection("questions");
  var result = collection.aggregate([{ $sample: { size: 5 } }]).toArray();
  return result;
};

module.exports = {
  getQueDao,
};
