const mongoose = require("mongoose");

const schema = mongoose.Schema;

const containerSchema = new schema();

module.exports = mongoose.model("container", containerSchema, "data");