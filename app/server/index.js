const restify = require('restify')
  , server = restify.createServer()
  , routes = require('../routes')
  , cors = require('./cors')
  , errorHandler = require('./errorHandler')

// CALLING ROUTES
routes(server)

// RESOLVING CORS PROBLEM
cors(server)

// ERROR HANDLER
server.use(errorHandler)

// RESOLVING PROBLEMA WITH REQUEST PARAMS
server.use(restify.plugins.bodyParser())

module.exports = server
