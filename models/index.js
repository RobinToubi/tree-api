const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");

mongoose.set('debug', true);

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.DB;
db.user = require("./user.model.js")(mongoose);
db.role = require("./role.model.js")(mongoose);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;