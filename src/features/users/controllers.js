const validator = require('fastest-validator')
const bcrypt = require('bcrypt')
const Boom = require('boom')

const users = require('./services')

const v = new validator()

module.exports = {
  store: async ({ request:{body}, response }) => {
    if (await users.findOn({ email: body.email })){      
      return response.body = {Result: "usuário já cadastrado"}

    } else {    
      const schema = {
        fistname: {max: 60, min:1, type: "string"},
        lastName: {max: 60, min:1, type: "string"},
        email: {max: 255, min:8, type: "string"},
        password: {max: 6, min:4, type: "string"}    
      }
    
      const erros = v.validate(body, schema)
    
      if(Array.isArray(erros) && erros.length) {
        response.status = 400
        return response.body = Boom.badRequest(null,  erros)
      }

      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(body.password, salt)
      body.password = hash

      users.create(body)
      return response.body = {Result: body}

    }
  },

  index: async ({response}) => response.body = await users.all(),

  update: async ({response, params, request:{body}}) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(body.password, salt)
    body.password = hash

    await users.update(body, params)
    
    return response.body = {result: "Usuário alterado com sucesso!"}
  },

  destroy: async ({response, params}) => {
    await users.destroy(params)

    return response.body = {result: "Usuário deletado com sucesso!"}
  }
}
