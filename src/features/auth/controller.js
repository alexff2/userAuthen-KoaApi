const authenticate = require('./services')
const Boom = require('boom')
const jwt = require('jsonwebtoken')

module.exports = {
  auth: async ({request,response}) => {
    const user = await authenticate(request.body)
    if (user) {
      response.body = jwt.sign({ email: user.email }, 'meusegredo')
    } else {
      response.body = {Error: Boom.unauthorized()}
    }
  }
}