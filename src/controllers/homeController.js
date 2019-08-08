const getAllData = require("../database/queries/getAll");
exports.getData = (request, response) => {
  getAllData((err, res) => {
    if (err) {
      console.log(err);
    } else {
      response.render("home", { data: res });
    }
  });
};
