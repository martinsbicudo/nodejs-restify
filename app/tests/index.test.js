const setup = require('./setup.js')
  , categories = require('./categories')
  , users = require('./users')

// CALLING TESTS
categories(setup)
users(setup)
