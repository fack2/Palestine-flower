const getOneFlower = require("../database/queries/getOne");
const alert = require('alert-node')
exports.getFlower = (request, response) => {
  const { id } = request.params;

  getOneFlower(id, (err, res) => {
    if (err || res.length <=0) {
        alert("there is no flower in this path")
    } else {
        response.render("flower", {
          data: res
        });
      }
  });
};
