const restify = require('restify')
  , server = restify.createServer()
  , routes = require('../routes')
  , cors = require('./cors')

// CALLING ROUTES
routes(server)

// RESOLVING CORS PROBLEM
cors(server)

// RESOLVING PROBLEMA WITH REQUEST PARAMS
server.use(restify.plugins.bodyParser())

module.exports = server
