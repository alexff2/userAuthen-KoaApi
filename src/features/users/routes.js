const controllers = require('./controllers')

module.exports = router => {
  router.post('/api/users',controllers.store)
  router.get('/api/users',controllers.index)
  router.put('/api/users/:id',controllers.update)
  router.delete('/api/users/:id',controllers.destroy)
}