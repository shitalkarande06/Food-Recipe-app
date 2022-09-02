const container = require("../models/container");

exports.getContainer = (req, res) => {
  container
    .find()
    .then((response) =>
      res.json({
        containerData: response,
      })
    )
    .catch((err) => console.log(err));
};


