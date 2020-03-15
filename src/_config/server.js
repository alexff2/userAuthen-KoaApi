const koa = require('koa')
const Router = require('koa-router')
const applyRoutes = require('./routes')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const app = new koa()
const router = new Router()

module.exports = () => {
  console.log('O servidor está rodando na porta 8080')
  
  applyRoutes(router)

  app
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
  
  app.listen(8080)
}