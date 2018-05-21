const corsMiddleware = require('restify-cors-middleware')
  , cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*'],
    allowHeaders: ['*'],
    exposeHeaders: ['*']
  })

module.exports = server => {
  server.pre(cors.preflight)
  server.use(cors.actual)
}
