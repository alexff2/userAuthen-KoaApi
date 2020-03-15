const db = require('../../_db/models')

module.exports = {
  create: payload => db.User.create(payload),
  findOn: payload => db.User.findOne({where:payload}),
  all: () => db.User.findAll(),
  update: (field, id) => db.User.update(field,{where: id}),
  destroy: payload => db.User.destroy({where:payload})
}