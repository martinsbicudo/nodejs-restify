const restify = require('restify')
  , server = restify.createServer()
  , routes = require('../routes')
  , cors = require('./cors')
  , tryDAO = require('../middlewares/tryDAO')
  , modelsDAO = require('../middlewares/modelsDAO')
  , queries = require('../middlewares/queries')

// CALLING ROUTES
routes(server)

// RESOLVING CORS PROBLEM
cors(server)

// TRY DAO REQUEST
server.use(tryDAO)

// GLOBAL QUERIES
server.use(queries)

// GLOBAL MODELS
server.use(modelsDAO)

// RESOLVING PROBLEMA WITH REQUEST PARAMS
server.use(restify.plugins.bodyParser())

module.exports = server
