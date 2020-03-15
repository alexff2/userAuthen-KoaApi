const controller = require('./controller')

module.exports = (router) => {
  router.post('/api/auth', controller.auth)
}