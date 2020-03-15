const autRouter = require('../features/auth/routes')
const usersRouter = require('../features/users/routes')

module.exports = router => {
  autRouter(router)
  usersRouter(router)
}