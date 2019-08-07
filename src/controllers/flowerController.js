const getOneFlower = require('../database/queries/getOne')

exports.getFlower = (request, response) => {
    const {
        id
    } = request.params;

    getOneFlower(id, (err, res) => {
        if (err) {
            console.log(err)
        } else {
            response.render("flower", {
                data: res
            })
        }
    })
}