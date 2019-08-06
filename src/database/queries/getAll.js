const dbconnection = require("../db_connection");
const getData = cb => {
  dbconnection.query("select name,img from flower", (err, response) => {
    if (err) {
      console.log(err);
    } else {
        console.log('response.rows',response.rows);
      cb(null, response.rows);
    }
  });
};
module.exports= getData;