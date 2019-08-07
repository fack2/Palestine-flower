const path = require("path");

exports.serverError = (error, request, response, next) => {
  response.sendFile(path.join(__dirname, "..", "..", "public", "500.html"));
};

exports.pageNotFound = (request, response) => {
  response.sendFile(path.join(__dirname, "..", "..", "public", "404.html"));
};
