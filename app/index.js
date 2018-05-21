// ENV CONFIG
require('dotenv').config()

const server = require('./server')
  , port = process.env.SERVER_PORT || '3456'

server.listen(port)
