const restify = require('restify')
  , server = restify.createServer()
  , routes = require('../routes')
  , cors = require('./cors')

// CALLING ROUTES
routes(server)

// RESOLVING CORS PROBLEM
cors(server)

module.exports = server
