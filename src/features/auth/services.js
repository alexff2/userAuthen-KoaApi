const db = require('../../_db/models')

module.exports = (data) => db.User.findOne({where:data})