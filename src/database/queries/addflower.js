const dbconnection = require("../db_connection");
const addData = (name,arabicname,img,descrirtion,cb) => {
    console.log(name,arabicname,img,descrirtion)
  dbconnection.query("insert into flower (name,arabicname,img,descrirtion) values ($1,$2,$3,$4)",[name,arabicname,img,descrirtion], (err, response) => {
    if (err) {
      console.log(err);
    } else {
        // console.log('response.rows',response.rows);
      cb(null, response.rows);
    }
  });
};
module.exports= addData;